angular.module("JabberTalkee")

.controller("channelCtrl", ["channelService", function(channelService){

    channelService.getRequest()
        .then(
            function (response) {
                return response
            }
        )

}])