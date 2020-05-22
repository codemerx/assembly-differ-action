const core = require('@actions/core');
const { exec } = require("child_process");

try {
    exec("./binaries/assembly-differ.exe -h", (error, stdout, stderr) => {
        if (error) {
            core.setOutput(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            core.setOutput(`stderr: ${stderr}`);
            return;
        }

        core.setOutput(`stdout: ${stdout}`);
    });

} catch (error) {
    core.setFailed(error.message);
}
