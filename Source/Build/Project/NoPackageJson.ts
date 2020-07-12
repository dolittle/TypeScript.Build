// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
export class NoPackageJson extends Error {
    /**
     * Instantiates an instance of {NoPackageJson}.
     * @param {string} path
     */
    constructor(path: string) {
        super(`Could not find package.json at path '${path}'`);
    }
}
