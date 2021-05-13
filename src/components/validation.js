import * as yup from "yup";

import { CONSTANTS } from "./utils";

export const validationSchema = () => {
    return yup.object().shape({
            [CONSTANTS.MAX_SIZE]: yup.string().required(CONSTANTS.REQUIRED_MESSAGE),
            [CONSTANTS.MIN_SIZE]: yup.string().required(CONSTANTS.REQUIRED_MESSAGE),
            [CONSTANTS.MAX_WIDTH]: yup.string().required(CONSTANTS.REQUIRED_MESSAGE),
            [CONSTANTS.MIN_WIDTH]: yup.string().required(CONSTANTS.REQUIRED_MESSAGE),
    });
}