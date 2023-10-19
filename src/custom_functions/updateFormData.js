function updateFormData(e, formData, setFormData ) {
    const { name, value } = e.target;
    const data = {...formData};
    data[name] = value;
    setFormData(data);
}

export default updateFormData;