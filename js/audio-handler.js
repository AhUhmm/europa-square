AFRAME.registerComponent("audiohandler", {
    tick: function () {
        if (this.el.sceneEl.camera) {
            var cam = this.el.sceneEl.camera;
            var frustum = new THREE.Frustum();
            frustum.setFromMatrix(
                new THREE.Matrix4().multiplyMatrices(
                    cam.projectionMatrix,
                    cam.matrixWorldInverse
                )
            );

            // Your 3d point to check
            var pos1 = new THREE.Vector3();
            document.querySelector("#main").object3D.getWorldPosition(pos1);

            var pos2 = new THREE.Vector3();
            document.querySelector("#random").object3D.getWorldPosition(pos2);

            window.onclick = function () {
                if (frustum.containsPoint(pos1)) {
                    // Do something with the position...

                    var video1 = document.querySelector("#video1");
                    var video2 = document.querySelector("#video2");

                    console.log(
                        "video 1 was " +
                            video1.muted +
                            ", " +
                            "video2 was " +
                            video2.muted
                    );

                    video1.muted = !video1.muted;
                    video2.muted = true;

                    console.log(
                        "video 1 is " +
                            video1.muted +
                            ", " +
                            "video2 is " +
                            video2.muted
                    );
                    var el = this.el;
                    console.log(el.getAttribute("material"));
                } else if (frustum.containsPoint(pos2)) {
                    // Do something with the position...

                    var video1 = document.querySelector("#video1");
                    var video2 = document.querySelector("#video2");

                    console.log(
                        "video 1 was " +
                            video1.muted +
                            ", " +
                            "video2 was " +
                            video2.muted
                    );

                    video2.muted = !video2.muted;
                    video1.muted = true;

                    console.log(
                        "video 1 is " +
                            video1.muted +
                            ", " +
                            "video2 is " +
                            video2.muted
                    );
                    var el = this.el;
                    console.log(el.getAttribute("material"));
                }
            };
        }
    },
});
