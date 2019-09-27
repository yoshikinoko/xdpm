/*
 * Copyright 2018 Adobe Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const validateManifest = require("./validateManifest");
const validateIconFiles = require("./validateIconFiles");

function validate(manifest, { root, id } = {}) {
    let errors = [];
    if (id && manifest.id !== id) {
        errors.push(
            `F1001: Manifest 'id' does not match expected id. Saw '${manifest.id}', expected '${id}'.`
        );
    }
    const manifestErrors = validateManifest(manifest);

    if (manifestErrors) {
        errors = errors.concat(manifestErrors);
    }

    const iconFileErrors = validateIconFiles(manifest.icons, root);
    if (iconFileErrors) {
        errors = errors.concat(iconFileErrors);
    }

    return errors;
}

module.exports = validate;
