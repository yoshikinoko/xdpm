const fs = require("fs");
const path = require("path");

function validateIconFiles(iconFiles, fileRoot) {
    errors = [];
    iconFiles.forEach((icon, idx) => {
        const filePath = path.join(fileRoot || ".", icon.path);
        if (!fs.existsSync(filePath)) {
            errors.push(
                `W2004: Icon ${idx} has path ${icon.path}, but no icon was found there.`
            );
        }
    });
    return errors;
}

module.exports = validateIconFiles;
