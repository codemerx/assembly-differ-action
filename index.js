const core = require('@actions/core');
const { exec } = require("child_process");

try {
    const args = core.getInput('args');

    exec(`dir ..\\..\\`, (error, stdout, stderr) => {
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

    exec(`dir ..\\..\\_actions`, (error, stdout, stderr) => {
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

    exec(`dir ..\\..\\_actions\\codemerx`, (error, stdout, stderr) => {
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

    exec(`dir ..\\..\\_actions\\codemerx\\assembly-differ-action`, (error, stdout, stderr) => {
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

    exec(`..\\..\\_actions\\codemerx\\assembly-differ-action\\v0.2.9\\binaries\\assembly-differ.exe ${args}`, (error, stdout, stderr) => {
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
