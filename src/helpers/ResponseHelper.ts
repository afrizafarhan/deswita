const ResponseHelper = (status: string, message: string, data: [] = []) => {
    return data.length ? { status, message, data } : { status, message }
}

export default ResponseHelper;