'use strict';
const FeesStructureModel = require('../models/fees-structure');
const ClassModel = require('../models/class');
const FeesCollectionModel = require('../models/fees-collection');
const StudentModel = require('../models/student');

let GetSingleClassFeesStructure = async (req, res, next) => {
    let className = req.params.id;
    try {
        const singleFeesStr = await FeesStructureModel.findOne({ class: className });
        if(!singleFeesStr){
            return res.status(404).json('Fee Structure not found !')
        }
        return res.status(200).json(singleFeesStr);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let CreateFeesStructure = async (req, res, next) => {
    let className = req.body.class;
    let { admissionFees, totalFees } = req.body;
    let feesType = req.body.type.feesType;
    let feesPayType = req.body.type.feesPayType;
    let feesTypeTotal = feesType.reduce((total, obj) => {
        let value = Object.values(obj)[0];
        return total + value;
    }, 0);
    let feesPayTypeTotal = feesPayType.reduce((total, obj) => {
        let value = Object.values(obj)[0];
        return total + value;
    }, 0);

    try {
        const checkClassExist = await ClassModel.findOne({ class: className });
        if (!checkClassExist) {
            return res.status(404).json('Invalid Class !');
        }
        const checkFeesStructure = await FeesStructureModel.findOne({ class: className });
        if (checkFeesStructure) {
            return res.status(400).json(`Class ${className} fees structure already exist !`);
        }
        if (totalFees !== feesTypeTotal) {
            return res.status(400).json(`Class ${className} total fees is not equal to all fees particulars total !`);
        }
        if (totalFees !== feesPayTypeTotal) {
            return res.status(400).json(`Class ${className} total fees is not equal to all fees installment total !`);
        }

        let feesStructureData = {
            class: className,
            admissionFees: admissionFees,
            totalFees: totalFees,
            feesType: feesType,
            installment: feesPayType,
        }
        let feesStructure = await FeesStructureModel.create(feesStructureData);
        if (feesStructure) {
            let installment = feesStructure.installment;
            installment.forEach((item) => {
                Object.keys(item).forEach((key) => {
                    item[key] = 0;
                });
            });
            let admissionFees = feesStructure.admissionFees;
            let totalFees = feesStructure.totalFees;
            let checkStudent = await StudentModel.find({ class: className });
            if (checkStudent) {
                let studentFeesData = [];
                for (let i = 0; i < checkStudent.length; i++) {
                    let student = checkStudent[i];

                    let feesObject = {
                        studentId: student._id,
                        class: student.class,
                        admissionFeesPayable: false,
                        admissionFees: 0,
                        totalFees: totalFees,
                        paidFees: 0,
                        dueFees: totalFees,
                        receipt: installment,
                        installment: installment,
                        paymentDate: installment,
                    };

                    if (student.admissionType === 'New') {
                        feesObject.admissionFeesPayable = true;
                        feesObject.totalFees += admissionFees;
                        feesObject.dueFees += admissionFees;
                    }

                    studentFeesData.push(feesObject);
                }
                if (checkStudent && studentFeesData.length > 0) {
                    const checkStudentFeesData = await FeesCollectionModel.create(studentFeesData);
                    if (checkStudentFeesData) {
                        return res.status(200).json('Fees structure add successfully.');
                    }
                }
            }
            return res.status(200).json('Fees structure add successfully.');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

let DeleteFeesStructure = async (req, res, next) => {
    try {
        const id = req.params.id;
        const feesStructure = await FeesStructureModel.findById(id);
        if (!feesStructure) {
            return res.status(404).json('Fees structure not found!');
        }

        const className = feesStructure.class;
        const [deleteFeesRecord, deleteFeesStructure] = await Promise.all([
            FeesCollectionModel.deleteMany({ class: className }),
            FeesStructureModel.findByIdAndRemove(id),
        ]);
        if (deleteFeesRecord.deletedCount > 0 || deleteFeesStructure) {
            return res.status(200).json('Fees structure deleted successfully.');
        } else {
            return res.status(500).json('Failed to delete Fees structure.');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error!');
    }
}

module.exports = {
    GetSingleClassFeesStructure,
    CreateFeesStructure,
    DeleteFeesStructure

}