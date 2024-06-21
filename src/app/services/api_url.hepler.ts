
// export const baseUrl = "https://shaghala.raselny.net/";
export const baseUrl = "https://shkalah.mjcoders.ml/";
export const apiUrl = baseUrl+"api/";
// APIS URL;
export const loginApi = apiUrl+"general/signin";
export const loginByTyprApi = apiUrl+"general/signinByType";
export const sendMailOtpApi = apiUrl+"general/sendMailOtp";
export const appSettingApi = apiUrl+"general/get_setting";
export const rechargeStripeApi = apiUrl+"general/recharge_stripe";
export const rechargePaypaleApi = apiUrl+"general/recharge_paypal";
export const rechargeFitoraApi = apiUrl+"general/recharge_fatora";
export const signupApi = apiUrl+"general/signup";
export const resetPassword = apiUrl+"general/reset_password/check";
export const resetPasswordSave = apiUrl+"general/reset_password";
export const verifyPhone = apiUrl+"general/verify";
export const verifyEmail = apiUrl+"general/verifyEmail";
export const getCountiesApi = apiUrl+"general/get_countries";
export const getTypes = apiUrl+"general/getTypes";
export const updateProfileApi = apiUrl+"profile/edit";
export const uploadProfilePicApi = apiUrl+"profile/upload_image";
export const getCompaniesApi = apiUrl+"profile/get_companies";

export const getWorkerPageApi = apiUrl+"worker/get_info";
export const addWorkerApi = apiUrl+"worker/add";
export const updateWorkerApi = apiUrl+"worker/edit";
export const uploadCVWorkerApi = apiUrl+"worker/uploadCv";
export const uploadDocumentApi = apiUrl+"general/uploadDoc";
export const profileSliderApi = apiUrl+"profile/profile_slider";
export const getUserByIdApi = apiUrl+"profile/checkUser";
export const homeSliderApi = apiUrl+"slider/home_slider";
export const departmentApi = apiUrl+"complain/dept";
export const homeIndiWorkerApi = apiUrl+"home/Indi_worker"
export const homeCompanyWorkerApi = apiUrl+"home/comp_worker";
export const addComplainApi = apiUrl+"complain/add";
export const addFavApi = apiUrl+"favourite/add";
// favourite/company_worker
export const favCompanyApi = apiUrl+"favourite/company_worker";
export const favIndApi = apiUrl+"favourite/ind_worker";
export const workerApi = apiUrl+"worker/get_all_workers";
export const deleteWorkerApi = apiUrl+"worker/delete";
export const getWorkerByUserApi = apiUrl+"worker/get_worker_by_user";
export const workerDetailApi = apiUrl+"worker/details";
export const getWorkerByAdvType = apiUrl+"worker/get_by_adv_type";
export const getWorkerByCompany = apiUrl+"worker/get_by_company";
export const getFilterWorkerApi = apiUrl+"worker/filter";
export const checkResetvationApi = apiUrl+"reservation/check_reservation";
export const addReservationFatora = apiUrl+"reservation/fatora_add";
export const addReservationPaypal = apiUrl+"reservation/paypal_add";
export const getUserReservation = apiUrl+"reservation/get_by_user";
export const getUserNotification = apiUrl+"notification/get";
export const getNotificationCount = apiUrl+"notification/get_notification_count";
export const readNotificationApi = apiUrl+"notification/read_notification";
// read_notification
// worker/details
