/*
 * Example onCellEdit Client Script — Incident
 * Purpose: Validate an inline list edit.
 *
 * Create a Client Script record on the Incident [incident] table.
 * Type: onCellEdit
 * Configure the table/field according to your assignment.
 *
 * Note: The callback arguments and behaviour should be checked against the
 * ServiceNow release and the exact list-edit scenario used by your project.
 */
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    // Example rule only: reject an empty value during inline editing.
    if (newValue === null || String(newValue).trim() === '') {
        g_form.addErrorMessage('The edited value cannot be empty.');
        callback(false);
        return;
    }

    callback(true);
}
