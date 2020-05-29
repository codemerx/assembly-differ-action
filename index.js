const core = require('@actions/core');
const { exec } = require("child_process");

try {
    const args = core.getInput('args');

    exec(`..\\..\\v0.2.8\\_actions\\codemerx\\assembly-differ-action\\binaries\\assembly-differ.exe ${args}`, (error, stdout, stderr) => {
        if (error) {
            core.setFailed(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            core.setFailed(`stderr: ${stderr}`);
            return;
        }

        core.info(`stdout: ${stdout}`);
    });
} catch (error) {
    core.setFailed(error.message);
}
