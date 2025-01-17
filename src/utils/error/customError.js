//커스텀 에러 객체를 만들 예정

class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = 'CustomError'
    }

    
}

export default CustomError;