import * as yup from "yup";

import { CONSTANTS } from "./utils";

export const validationSchema = () => {
    return yup.object().shape({
            [CONSTANTS.MIN_WIDTH]: yup.string().required(CONSTANTS.REQUIRED_MESSAGE),
    });
}