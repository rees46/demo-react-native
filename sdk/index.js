import MainSDK from "./MainSDK";

export const SESSION_CODE_EXPIRE = 120;
export const SDK_API_URL = 'https://api.rees46.ru/';
export const SDK_STORAGE_NAME = '@Rees46';
export const SDK_PUSH_CHANNEL = 'Rees46';

class Rees46 extends MainSDK{
  constructor(shop_id, stream, debug = false) {
    super(shop_id, stream, debug);
    this.init();
  }
}
export default Rees46;
