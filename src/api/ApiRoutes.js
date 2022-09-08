// export const host = "https://kevinschatroom.herokuapp.com"
export const host = "http://localhost:1000"
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const avatarRoute = `${host}/api/auth/setpersonal`;
export const userContactRoute = `${host}/api/auth/contacts`;
export const userFriendsRoute = `${host}/api/auth/friends`;
export const userGetRequestsRoute = `${host}/api/auth/getRequest`;
export const userSearchContactsRoute = `${host}/api/auth/searchContacts`;
export const userRequestRoute = `${host}/api/auth/request`;
export const userAcceptRoute = `${host}/api/auth/accept`;
export const userDeleteRoute = `${host}/api/auth/delete`;
export const userRejectRoute = `${host}/api/auth/reject`;

export const sendMessageRoute =  `${host}/api/messages/addMessage`;
export const getMessageRoute =  `${host}/api/messages/getAllMessage`;