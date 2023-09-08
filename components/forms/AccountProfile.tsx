"use client";
import { Form, useForm } from "react-hook-form";

import {form} from "@/components/ui/form"
interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio:string;
        image:string;

    };

    btnTitle: string;


}
import {zodResolver} from '@hookform/resolvers/zod'
import { userValidation } from "@/lib/validations/user";
const AccountProfile = ({ user, btnTitle }: Props) => {
    const form = useForm({
        resolver: zodResolver(userValidation),
        defaultValues : {
            profile_photo:'',
            name:'',
            username: '',
            bio: '',
        }
    })
  return (
    <Form>

    </Form>
  )
};
export default AccountProfile;
