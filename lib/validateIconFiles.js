const fs = require("fs");
const path = require("path");
const sizeOf = requrie("image-size");

function validateIconFiles(iconFiles, fileRoot) {
    errors = [];
    iconFiles.forEach((icon, idx) => {
        const filePath = path.join(fileRoot || ".", icon.path);
        if (!fs.existsSync(filePath)) {
            errors.push(
                `W2004: Icon ${idx} has path ${icon.path}, but no icon was found there.`
            );
        } else {
            var dimensions = sizeOf(filePath);
            if (icon.width !== dimensions.width) {
                errors.push(
                    `W2005: Icon ${idx} has width ${icon.width}, but the width of the image was ${dimensions.width}.`
                );
            }
            if (icon.height !== dimensions.height) {
                errors.push(
                    `W2006: Icon ${idx} has width ${icon.height}, but the height of the image was ${dimensions.height}.`
                );
            }
        }
    });
    return errors;
}

module.exports = validateIconFiles;
