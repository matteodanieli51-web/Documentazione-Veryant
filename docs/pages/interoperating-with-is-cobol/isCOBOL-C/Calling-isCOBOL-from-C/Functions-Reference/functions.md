### Functions Reference

The iscobolc library provides the following functions:

[isCobolInit](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolInit)

[isCobolCall](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCall)

[isCobolCallNoStop](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallNoStop)

[isCobolCancel](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCancel)

[isCobolFunc](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc)

[isCobolTidy](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolTidy)

[isCobolExit](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolExit)

[isCobolError](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolError)

[isCobolGetJNIEnv](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGetJNIEnv)

[isCobolGoback](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGoback)

For each one of the above functions, an additional extended function is provided to work in multi-thread environments.

[isCobolInitEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolInitEx)

[isCobolCallEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallEx)

[isCobolCallNoStopEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallNoStopEx)

[isCobolCancelEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCancelEx)

[isCobolFuncEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFuncEx)

[isCobolErrorEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolErrorEx)

[isCobolGetJNIEnvEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGetJNIEnvEx)

[isCobolGobackEx](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGobackEx)

[isCobolThreadTidy](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolThreadTidy)

These functions are defined in the iscobolc.h header file, that is installed with isCOBOL in the folder $ISCOBOL_HOME/native/include.

**Note**: COBOL programs called thru [isCobolCall](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCall) and [isCobolFunc](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc) are not aware of the C environment. An environment variable set by the C program cannot be retrieved by the COBOL program using the ACCEPT FROM ENVIRONMENT statement. In order to set an environment variable for the COBOL program, create a separate COBOL program that sets the variable using the SET ENVIRONMENT statement and then call this program using [isCobolFunc](/pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc).
