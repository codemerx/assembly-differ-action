const core = require('@actions/core');
const { exec } = require("child_process");

try {
    const args = core.getInput('args');

    exec(`dir ..\\..\\_actions\\codemerx\\assembly-differ-action\\v0.2.10`, (error, stdout, stderr) => {
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

    exec(`dir ..\\..\\_actions\\codemerx\\assembly-differ-action\\v0.2.10\\binaries`, (error, stdout, stderr) => {
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

    exec(`..\\..\\_actions\\codemerx\\assembly-differ-action\\v0.2.10\\binaries\\assembly-differ.exe ${args}`, (error, stdout, stderr) => {
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
