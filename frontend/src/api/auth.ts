import http from './index';

const PREFIX = '/auth';

export const register = (data: Record<string, any>) 

export const login = (data: Record<string, any>) => http.post(`${PREFIX}/login`, data);
