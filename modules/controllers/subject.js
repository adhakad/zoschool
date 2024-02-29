'use strict';
const fs = require('fs');
const SubjectModel = require('../models/subject');

let countSubject = async(req,res,next) => {
    let countSubject = await SubjectModel.count();
    return res.status(200).json({countSubject});
}
let GetSubjectPagination = async (req, res, next) => {
    let searchText = req.body.filters.searchText;
    let searchObj = {};
    if (searchText) {
        searchObj = /^(?:\d*\.\d{1,2}|\d+)$/.test(searchText)
            ? {
                $or: [{ discount: searchText }, { price: searchText }],
            }
            : { subject: new RegExp(`${searchText.toString().trim()}`, 'i') };
    }

    try {
        let limit = (req.body.limit) ? parseInt(req.body.limit) : 10;
        let page = req.body.page || 1;
        const subjectList = await SubjectModel.find(searchObj).sort({ _id: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const countSubject = await SubjectModel.count();

        let subjectData = { countSubject: 0 };
        subjectData.subjectList = subjectList;
        subjectData.countSubject = countSubject;
        return res.json(subjectData);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let GetAllSubject = async (req, res, next) => {
    try {
        const subjectList = await SubjectModel.find({})
        return res.status(200).json(subjectList);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let GetSingleSubject = async (req, res, next) => {
    try {
        const singleSubject = await SubjectModel.findOne({ _id: req.params.id });
        return res.status(200).json(singleSubject);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let GetSingleSubjectBySubject = async(req,res,next) => {
    try {
        const singleSubject = await SubjectModel.findOne({ subject: req.params.id });
        return res.status(200).json(singleSubject);
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let CreateSubject = async (req, res, next) => {
    const { subject } = req.body;
    const subjectData = {
        subject: subject,
    }
    try {
        const checkSubject = await SubjectModel.findOne({ subject: subject });
        if(checkSubject){
            return res.status(400).json("subject already exist !")
        }

        const createSubject = await SubjectModel.create(subjectData);
        return res.status(200).json('Subject created successfully.');
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let UpdateSubject = async (req, res, next) => {
    try {
        const id = req.params.id;
        const subjectData = {
            subject: req.body.subject
        }
        const updateSubject = await SubjectModel.findByIdAndUpdate(id, { $set: subjectData }, { new: true });
        return res.status(200).json('Subject update successfully !');
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}
let DeleteSubject = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteSubject = await SubjectModel.findByIdAndRemove(id);
        return res.status(200).json('Subject delete successfully.');
    } catch (error) {
        return res.status(500).json('Internal Server Error !');
    }
}

module.exports = {
    countSubject,
    GetSubjectPagination,
    GetAllSubject,
    GetSingleSubject,
    GetSingleSubjectBySubject,
    CreateSubject,
    UpdateSubject,
    DeleteSubject,
}