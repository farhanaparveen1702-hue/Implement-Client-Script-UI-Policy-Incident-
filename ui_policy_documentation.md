# UI Policy — Incident

## Example configuration
- **Name:** Make Short Description Mandatory
- **Table:** Incident [incident]
- **Active:** Yes
- **条件 / Condition:** State is not Closed (choose the matching condition available in your instance)
- **Reverse if false:** Yes

## UI Policy Action
- **Field name:** Short description
- **Mandatory:** True
- **Visible:** Leave unchanged
- **Read-only:** Leave unchanged

## Expected result
When the condition is true, Short description becomes mandatory. When the condition becomes false, the setting is reversed if **Reverse if false** is enabled.

## Test cases
1. Open a new or existing Incident record.
2. Check whether the UI Policy condition is true.
3. Confirm that Short description is mandatory when the condition is true.
4. Change the record so the condition is false.
5. Confirm that the mandatory setting is reversed.
6. Save the record and verify the result.

**Important:** This is a sample configuration. Use the condition and field actions that match your assigned project and your actual ServiceNow instance.
