import * as Code from "@hapi/code"
import * as Lab from "@hapi/lab"
import fs from "fs";



const expect      = Code.expect;
const lab         = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe    = lab.describe;
const it          = lab.it;
const after       = lab.after;

const randomUsername = `${Math.floor(Date.now()/100000)}`
let lessonId
let courseId



import * as Server from "../src/index"
import * as userDao from "../src/dao/users"

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
// tests
describe('User Routes Test', () => {

    let cookie

    lab.before(async () => {
        // server initialize time
        await delay(1000);
    });

    lab.after(async () => {
        console.log(`test done`);
        // await Server.server.stop();
    });

    it('Create new account', async () => {


        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/users/',
            payload:  {
                username: randomUsername,
                firstname: 'Tom',
                lastname: 'Rick',
                password: 'password',
                compare_password: 'password'
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200); // redirect success to homepage
    });

    it('Login to the new account', async () => {


        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/login/',
            payload:  {
                username: randomUsername,
                password: 'password',
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(302);
        cookie = response.headers["set-cookie"][0].split(";")[0]

    });

    it('Update User account details', async () => {
        const response = await Server.server.inject({
            method: 'PUT',
            url: '/v1/users/',
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "firstname": "harry"
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });
  
});



describe('Language Routes Test', () => {

    let cookie

    lab.before(async () => {
        // server initialize time
        await delay(1000);
        
        
        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/login/',
            payload:  {
                username: randomUsername,
                password: 'password',
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(302);
        cookie = response.headers["set-cookie"][0].split(";")[0]

    });

    lab.after(async () => {
        console.log(`test done`);
    });

    it('Add Language', async () => {
        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/languages/',
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "code": "af",
                "name": "Afrikaans"
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    it('Get Language', async () => {
        const response = await Server.server.inject({
            method: 'GET',
            url: '/v1/languages/af/',
            headers: {
                "Cookie": cookie
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    it('Update Language User account details', async () => {
        const response = await Server.server.inject({
            method: 'PUT',
            url: '/v1/languages/af/',
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "name": "EnglishUS"
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    it('DELETE Language User account details', async () => {
        const response = await Server.server.inject({
            method: 'DELETE',
            url: '/v1/languages/af/',
            headers: {
                "Cookie": cookie
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

  
  
});

describe('Courses Routes Test', () => {

    let cookie


    lab.before(async () => {
        // server initialize time
        await delay(1000);
        
        
        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/login/',
            payload:  {
                username: randomUsername,
                password: 'password',
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(302);
        cookie = response.headers["set-cookie"][0].split(";")[0]

    });

    lab.after(async () => {
        console.log(`test done`);
    });

    it('Add Course', async () => {
        const response: any = await Server.server.inject({
            method: 'POST',
            url: '/v1/courses/',
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "name": "Learn Hindi in 2 Weeks by Harry"
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
        courseId = response.result.uid 
    });

    it('Get Courses', async () => {
        const response = await Server.server.inject({
            method: 'GET',
            url: '/v1/courses/',
            headers: {
                "Cookie": cookie
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    it('Update Course User account details', async () => {
        const response = await Server.server.inject({
            method: 'PUT',
            url: `/v1/courses/${courseId}/`,
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "name": "Learning Spanish"
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });
  
  
});

describe('Lessons Routes Test', () => {

    let cookie

    lab.before(async () => {
        // server initialize time
        await delay(1000);
        
        
        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/login/',
            payload:  {
                username: randomUsername,
                password: 'password',
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(302);
        cookie = response.headers["set-cookie"][0].split(";")[0]

    });

    lab.after(async () => {
        console.log(`test done`);
    });

    it('Add Lesson', async () => {
        const response: any = await Server.server.inject({
            method: 'POST',
            url: '/v1/lessons/',
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "language_code": "en",
                "name": "Learn Spanish Day 1",
                "text": "Language learning that works Have real conversations faster with the award-winning app and new live online classes taught by world-class teachers.",
                "course_id": courseId 
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
        lessonId = response.result.uid
    });

    it('Get Lesson By Uid', async () => {
        const response = await Server.server.inject({
            method: 'GET',
            url: `/v1/lessons/${lessonId}/`,
            headers: {
                "Cookie": cookie
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    it('Update Course User account details', async () => {
        const response = await Server.server.inject({
            method: 'PUT',
            url: `/v1/lessons/${lessonId}/`,
            headers: {
                "Cookie": cookie
            },
            payload:  {
                "name": "Learn Spanish Day 2"
            }
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });

    // it('Update Course User account details', async () => {
    //     const response = await Server.server.inject({
    //         method: 'DELETE',
    //         url: `/v1/lessons/${lessonId}/`,
    //         headers: {
    //             "Cookie": cookie
    //         }
    //         });
    //         console.log(response.result)

    //     expect(response.statusCode).to.equal(200);
    // });
  
  
});


describe('DELETE USER After Test', () => {

    let cookie

    lab.before(async () => {
        // server initialize time
        await delay(1000);
        
        
        const response = await Server.server.inject({
            method: 'POST',
            url: '/v1/login/',
            payload:  {
                username: randomUsername,
                password: 'password',
              } 
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(302);
        cookie = response.headers["set-cookie"][0].split(";")[0]

    });

    lab.after(async () => {
        console.log(`test done`);
        await Server.server.stop();
    });

    it('DELETE  User After Tests', async () => {
        const response = await Server.server.inject({
            method: 'DELETE',
            url: '/v1/users/',
            headers: {
                "Cookie": cookie
            },
            });
            console.log(response.result)

        expect(response.statusCode).to.equal(200);
    });
  
  
});



