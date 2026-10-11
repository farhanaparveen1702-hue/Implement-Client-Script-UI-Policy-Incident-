/*
 * Example Client Script | Type: onSubmit | Table: Incident [incident]
 * Prevent submission when Short description is empty.
 */
function onSubmit() {
    var shortDescription = g_form.getValue('short_description');
    if (!shortDescription || shortDescription.trim() === '') {
        g_form.addErrorMessage('Please enter a short description before submitting the incident.');
        g_form.setFocus('short_description');
        return false;
    }
    return true;
}
