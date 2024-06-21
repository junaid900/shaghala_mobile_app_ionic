export interface User {
    user_id: string;
    users_roles_id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    city: string;
    address: string;
    user_image: string;
    is_deleted: string;
    type: string;
    session_id: string;
    token_id?: any;
    user_created_at: string;
    user_updated_at: string;
    verification_code?: any;
    is_phone_verified: string;
    is_email_verified: string;
    is_blocked: string;
    status: string;
    login_type: string;
}