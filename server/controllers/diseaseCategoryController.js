
const responseHandler = require("../utils/response-handler");
const DiseaseCategory = require("../models/DiseaseCategory");


async function createDiseaseCategory(req, res, next) {
    try {
        let diseaseCategory = {
            category: req.body.category,
            subCategories: req.body.subCategories,
            patient: req.body.patient
        };
        let newdiseaseCategory = await new DiseaseCategory(diseaseCategory).save();
        responseHandler(res, 200, newdiseaseCategory);
    }
    catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Disease Ctegory Not created' });
    }
}

async function getAllDiseaseCategories(req, res, next) {
    const id = req.params.pid;

    try {
        await DiseaseCategory.find({ patient: id }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error getting Disease Categories' });
    }
}

async function getSingleDiseaseCategory(req, res, next) {
    const id = req.params.dcId;
    DiseaseCategory.find({ _id: id }, (error, document) => {
        if (error) {
            responseHandler(res, 500, error.msg);
        }
        responseHandler(res, 200, document);
    })
}

async function deleteDiseaseCategory(req, res, next) {
    const id = req.params.dcId;
    DiseaseCategory.findByIdAndRemove({ _id: id }, (error, document) => {
        if (error) {
            responseHandler(res, 500, error);
        }
        responseHandler(res, 200, { msg: `Disease Category ${document.disease} deleted` })
    })
}

async function updateDiseaseCategory(req, res, next) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        await DiseaseCategory.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Disease category' });
    }
}

async function createDefaultDiseaseCategory(req, res, next) {
    // console.log("--->",req.body);
    try {
        for (i = 0; i < req.body.length; i++) {
            let diseaseCategory = {
                category: req.body[i].category,
                subCategories: req.body[i].subCategories,
                patient: req.params.pid,
            };
            let newdiseaseCategory =  await new DiseaseCategory(diseaseCategory).save();
          
        }
        responseHandler(res, 200, 'Categories Added');
    }
    catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Disease Ctegory Not created' });
    }
}



module.exports = {
    createDiseaseCategory,
    getAllDiseaseCategories,
    getSingleDiseaseCategory,
    deleteDiseaseCategory,
    updateDiseaseCategory,
    createDefaultDiseaseCategory
}
