// There is no decorator (@) for Services. So Services are essentially plain ts classes.
export class CoursesService{
    getCourses(){

        return ["author1","author2","author3","author4"];
        // This can actually be a web service call.
    }
}

