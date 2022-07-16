
export default {

    methods:{
        checkIndexPage(){
            // Non- Index page should have a class ".notIdx" at "container".
            // ".notIdx" makes elements in the left-bar in dark color
            // Index Page does not need the class ".notIdx"
        
            const notIdxClass = document.querySelector(".container").classList.contains('notIdx');
            if(this.$route.path == "/index" || this.$route.path == "/" ){                   // If this IS index page
                if (notIdxClass){                                                           // But has "notIdx" in container
                    document.querySelector(".container").classList.remove("notIdx");        // Remove it
                }
                document.querySelector(".container").classList.add("indexAnimation");   // add animation for index page                                   
            } else {                                                                // If this is NOT index page
                if (!notIdxClass){                                                  // And no "notIdx" in container
                    document.querySelector(".container").classList.add("notIdx");   // Add one
                }            
                document.querySelector(".container").classList.remove("indexAnimation");                                        
            }
        }
    }
     
}



