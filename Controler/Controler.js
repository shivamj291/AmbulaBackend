const modalsdata = require("../Modal/Modal");

async function getData(limit,page){
    console.log(limit,page)
    const getData =await modalsdata.find().limit(limit).skip(page*limit);
    return getData;
}

async function addData(data){
    const dataForAdd = await modalsdata.create(data);
    return dataForAdd
}

async function UpdateData(id,data){
    const dataForUpdate =await modalsdata.findByIdAndUpdate(id,{$set:{...data}});
    return dataForUpdate;
}

async function deleteData(id){
    const data = await modalsdata.deleteOne({_id:id});
    return data
}

module.exports = {
    getData,addData,UpdateData,deleteData
}
