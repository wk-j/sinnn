import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker"
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker"

// Since packaging is done by you, you need
// to instruct the editor how you named the
// bundles that contain the web workers.
let MonacoEnvironment = {
    getWorker: function (moduleId, label) {
        // Webpack
        if (label === 'json') {
            return new JsonWorker();
        }
        // ....
        return new EditorWorker();

        // Parcel
        if (label === 'json') {
            return new Worker('monaco-editor/esm/vs/language/json/json.worker');
        }
        // ....
        return new Worker('monaco-editor/esm/vs/editor/editor.worker');

    }
}