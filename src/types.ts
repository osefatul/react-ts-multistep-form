import { ReactNode } from "react";

export type formData = {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;

    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    
    email: string;
    password: string;
}


export type FormWrapperProps = {
    title: string;
    children: ReactNode;
}


export type UserData = {
    firstName: string;
    lastName: string;
    age: number;
}

export interface UserFormProps extends UserData {
    updateFields: (fields: Partial<UserData>) => void;
}



export interface AccountForm {
    email: string;
    password: string;
}

export interface AccountFormWrapperProps extends AccountForm {
    updateFields: (fields: Partial<AccountForm>) => void;
}



export interface AddressData {
    street: string;
    zip: string;
    state: string;
    city: string;
    country: string;
}

export interface AddressDataWrapperProps extends AddressData {
    updateFields: (fields: Partial<AddressData>) => void;
}