//    Copyright CodeMerx 2021
//    This file is part of Assembly Differ.

//    Assembly Differ is free software: you can redistribute it and/or modify
//    it under the terms of the GNU Affero General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.

//    Assembly Differ is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//    GNU Affero General Public License for more details.

//    You should have received a copy of the GNU Affero General Public License
//    along with Assembly Differ. If not, see<https://www.gnu.org/licenses/>.

const core = require('@actions/core');
const { exec } = require("child_process");

const executeCommand = (command, callback) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            core.setFailed(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            core.setFailed(`stderr: ${stderr}`);
            return;
        }

        try {
            callback(stdout);
        } catch (error) {
            core.setFailed(error.message);
            throw error;
        }
    });
}

const installAssemblyDiffer = (next) => {
    executeCommand('dotnet tool install -g assembly-differ', next);
}

const runAssemblyDiffer = (args) => {
    executeCommand(`assembly-differ ${args}`, (stdout) => {
        core.info(`stdout: ${stdout}`);
    });
}

const main = () => {
    try {
        installAssemblyDiffer(() => {
            const args = core.getInput('args');
            runAssemblyDiffer(args);
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
