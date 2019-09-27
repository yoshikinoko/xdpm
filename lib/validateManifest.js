const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const manifestScema = require("./manifestSchema");

function validateManifest(manifest) {
    let errors = null;
    var validate = ajv.compile(manifestScema);
    var valid = validate(manifest);
    if (!valid) {
        errors = validate.errors.map(
            e =>
                `manifest.json: ${e.dataPath} (${JSON.stringify(
                    e.params
                )}) -> ${e.params}`
        );
    }
    return errors;
}

module.exports = validateManifest;
