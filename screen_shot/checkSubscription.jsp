<%@ page contentType="text/html; charset=UTF-8" language="java" errorPage="/ErrorHandling.jsp"
%><%@ page import="org.apache.commons.httpclient.HttpStatus"
%><%@ page import="com.flaps.utility.CommonSymbols"
%><%
	String _sId = request.getParameter("SubscriptId");
	if(null == _sId) {
		_sId = "";
	}
	if(_sId.equals("58")) {
%>{'ip':'192.168.0.58:8080','APN':'flaps2'}<%
	} else if(_sId.equals("230")) {
%>{'ip':'192.168.0.230','APN':'flaps'}<%
	} else if(_sId.equals("0827203")) {
%>{'ip':'203.67.131.76:18080','APN':'flapsTW'}<%
	} else {
response.setContentType(CommonSymbols.str_DefaultContentType);
response.setCharacterEncoding(CommonSymbols.str_Charset_UTF8);
response.setStatus(HttpStatus.SC_INTERNAL_SERVER_ERROR);
response.sendError(403, "ABDFDS");
	}

%>