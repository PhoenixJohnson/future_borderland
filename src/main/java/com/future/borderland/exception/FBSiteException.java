package com.future.borderland.exception;

public class FBSiteException extends Exception {

    private FBSiteErrorCode errorCode;

    public FBSiteException(FBSiteErrorCode errorCode, Exception e) {
        super(e);
        this.errorCode = errorCode;
    }

    public FBSiteException(FBSiteErrorCode errorCode, String error) {
        super(error);
        this.errorCode = errorCode;
    }

    public FBSiteErrorCode getErrorCode() {
        return errorCode;
    }

}
