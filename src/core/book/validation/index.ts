//import Joi from '@hapi/joi';
// import { ClientError } from '~/errors/clientError';
// import { handleValidationError } from '~/helpers/handleValidationError';
// import { IBookAttributes } from '../book';

// export const validateBook = (data: IBookAttributes) => {
// 	const schema = Joi.object()
// 		.keys({
// 			name: Joi.string()
// 				.required()
// 				.min(1)
// 				.max(20)
// 				.label('이름'),
// 		})
// 		.error(handleValidationError);

// 	const { error } = Joi.validate(data, schema);

// 	if (error) {
// 		throw new ClientError(error.message, 400);
// 	}

// 	return {
// 		getName: () => data.name,
// 	};
// };