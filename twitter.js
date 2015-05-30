jQuery(function($) {
    console.log("doc ready!");
    
    search("hello");
    function search(search_term) {
        console.log("searching for ");
        console.log(search_term);
    }
    // TODO: set classes based on the hashtag found on the twitter account
});