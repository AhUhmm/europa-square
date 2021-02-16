window.onload = function () {
    AFRAME.registerComponent("videohandler", {
        init: function () {
            var sceneAssets = document
                .querySelector("a-scene")
                .querySelector("a-assets");
            var video = sceneAssets.querySelector("video");
            var totem = document.getElementById("roma");

            totem.addEventListener(
                "click",
                function () {
                    this.video.play();
                }.bind(this)
            );

            totem.addEventListener(
                "click",
                function () {
                    this.video.pause();
                    this.video.currentTime = 0;
                }.bind(this)
            );
        },
    });
};
