# MongoDB $inc Operator Type Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field by a specified value.  However, providing a string value instead leads to unexpected results or errors.

## Bug Description
The provided JavaScript code attempts to increment the `field1` field in all documents within the `myCollection` collection by '1'.  Because '1' is a string, MongoDB throws a type error.