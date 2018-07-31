/*Js Jq functions etc*/
jQuery(function () {
    var gunClip;
    var gunChamber;
    var gunStorage;
    var gunTrigger;
    var gunClipHTML;
    var gunChamberHTML;
    var gunStorageHTML;
    gunClip = $('.gunclip');
    gunChamber = $('.chamber');
    gunStorage = $('.storage');
    gunTrigger = $('.trigger');
    gunClipHTML = gunClip.attr('val');
    gunChamberHTML = gunChamber.attr('val');
    gunStorageHTML = gunStorage.attr('val');
    gunTrigger.click(function () {
        gunChamberHTML--;
        if (gunChamberHTML == 0) {
            gunChamberHTML = 0;
            setTimeout(function () {
                gunChamber.html(1);
            }, 1000);
            gunClipHTML--;
            if (gunClipHTML == 0) {
                alert("last one");
            }
            // else {
            //     gunClip.html(gunClipHTML);
            //     gunChamber.html(gunChamberHTML);
            //     gunStorage.html(gunStorageHTML);
            // }
            if (gunClipHTML < 1) {
                gunClipHTML = 9;
            }
            gunClip.html(gunClipHTML);
            gunChamber.html(gunChamberHTML);
            gunStorage.html(gunStorageHTML);
        }
    });
    gunClip.html(gunClipHTML);
    gunChamber.html(gunChamberHTML);
    gunStorage.html(gunStorageHTML);
});
(jQuery);