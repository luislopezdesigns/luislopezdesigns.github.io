$(document).ready(function () {
                
    var documentEl = $(document),
        fadeElem = $('.content');
                
                
        documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
                    
                    fadeElem.each(function() {
                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/200);
                    }); 
                });
                
            });
            $(document).ready(function(){
                // Add smooth scrolling to all links
                $("a").on('click', function(event) {
              
                  // Make sure this.hash has a value before overriding default behavior
                  if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
              
                    // Store hash
                    var hash = this.hash;
              
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                      scrollTop: $(hash).offset().top
                    }, 800, function(){
              
                      // Add hash (#) to URL when done scrolling (default click behavior)
                      window.location.hash = hash;
                    });
                  } // End if
                });
              });