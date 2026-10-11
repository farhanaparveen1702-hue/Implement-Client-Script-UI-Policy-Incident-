/*
 * Example Client Script | Type: onChange | Field: short_description
 * Show a hint when the short description is too brief.
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading) return;
    if (newValue && newValue.trim().length < 10) {
        g_form.showFieldMsg('short_description', 'Please provide a little more detail.', 'info');
    } else {
        g_form.hideFieldMsg('short_description', true);
    }
}
