import CryptoJS from "crypto-js";
class Helper {

    static getTokenCrypto(senha) {
        return CryptoJS.MD5(senha).toString();
    }
}

export default Helper;
