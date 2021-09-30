
import * as jwt from "jsonwebtoken";
import {
    Request,
    Server,
    ResponseToolkit,
    ServerAuthScheme,
    ServerAuthSchemeOptions,
} from "hapi";
import Boom from "@hapi/boom";

import { JWT_ERRORS } from "@errors/jwt";
import { SERVER_CONFIG } from "@config/server_config";

export const JwtScheme: ServerAuthScheme = (
    server: Server,
    options: ServerAuthSchemeOptions,
) => ({
    authenticate: (request: Request, h: ResponseToolkit) => {
        const { authorization } = request.headers;
        if (!authorization) {
            return Boom.unauthorized(
                JWT_ERRORS.EMPTY_AUTHORIZATION.message,
                null,
                JWT_ERRORS.EMPTY_AUTHORIZATION,
            );
        }
        const token = authorization.split(" ")[1]
        let decoded;
        try {

            decoded = jwt.verify(token, SERVER_CONFIG.JWT_SECRET_KEY, {
                algorithms: ["HS256"],
            });
        } catch (err) {
            const user = jwt.decode(token);
            request.auth.error = err;
            request.auth.artifacts = { user };

            request.auth.isAuthenticated = false;
            return Boom.unauthorized(
                JWT_ERRORS.JWT_SIGNATURE_VERIFICATION_FAILED.message,
                null,
                JWT_ERRORS.JWT_SIGNATURE_VERIFICATION_FAILED,
            );
        }
        return h.authenticated({
            credentials: { user: decoded },
        });
    },
});

export const generateToken = (userInfo: any) => {
    const token = jwt.sign(
        userInfo,
        SERVER_CONFIG.JWT_SECRET_KEY,
        {
            expiresIn: 30 * 60,
        },
    );
    return token;
}
