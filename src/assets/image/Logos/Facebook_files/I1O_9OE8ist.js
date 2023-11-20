;/*FB_PKG_DELIM*/

__d("TCompactProtocol",["StringToUtf8","ThriftTypes","Utf8ToString"],(function(a,b,c,d,e,f,g){var h,i=Object.freeze({CT_STOP:0,CT_BOOLEAN_TRUE:1,CT_BOOLEAN_FALSE:2,CT_BYTE:3,CT_I16:4,CT_I32:5,CT_I64:6,CT_DOUBLE:7,CT_BINARY:8,CT_LIST:9,CT_SET:10,CT_MAP:11,CT_STRUCT:12,CT_FLOAT:13}),j=Object.freeze({NONE:-1,CT_BOOLEAN_TRUE:i.CT_BOOLEAN_TRUE,CT_BOOLEAN_FALSE:i.CT_BOOLEAN_FALSE}),k=[i.CT_STOP,0,i.CT_BOOLEAN_TRUE,i.CT_BYTE,i.CT_DOUBLE,0,i.CT_I16,0,i.CT_I32,0,i.CT_I64,i.CT_BINARY,i.CT_STRUCT,i.CT_MAP,i.CT_SET,i.CT_LIST,0,0,0,i.CT_FLOAT],l=Math.pow(2,7)-1,m=-1*Math.pow(2,7),n=Math.pow(2,15)-1,o=-1*Math.pow(2,15),p=Math.pow(2,31)-1,q=-1*Math.pow(2,31),r=Math.pow(2,32)-1,s=BigInt("9223372036854775807"),t=BigInt("-9223372036854775808"),u=BigInt("18446744073709551615"),v=BigInt(63),w=BigInt(1),x=BigInt(7),y=BigInt("0x7f"),z=BigInt("0x80"),A=Math.pow(2,4);a=function(){function a(a){this.$4=null,this.$5=null,this.$1=a,this.$2=[],this.$3=0,this.$6=new DataView(new ArrayBuffer(1))}var b=a.prototype;b.readStructBegin=function(){this.$2.push(this.$3),this.$3=0};b.readStructEnd=function(){this.$3=this.$2.pop();return 0};b.writeStructBegin=function(a){this.$2.push(this.$3);this.$3=0;return 0};b.writeStructEnd=function(){this.$3=this.$2.pop();return 0};b.writeFieldBegin=function(a){if(a.ftype===(h||(h=c("ThriftTypes"))).BOOL){this.$4={fid:a.fid,fname:a.fname,ftype:a.ftype};return 0}else return this.$7(a,j.NONE)};b.writeListBegin=function(a){return this.$8(a)};b.writeListEnd=function(){return 0};b.writeSetBegin=function(a){return this.$8(a)};b.writeSetEnd=function(){return 0};b.writeMapBegin=function(a){var b=0;if(a.size===0)b+=this.$1.writeByte(0);else{b+=this.writeVarint32(a.size);if(a.ktype!=null&&a.vtype!=null)b+=this.$1.writeByte(this.$9(a.ktype)<<4|this.$9(a.vtype));else throw new Error("received invalid map info: "+JSON.stringify(a))}return b};b.writeMapEnd=function(){return 0};b.$7=function(a,b){var c=0;b=b===j.NONE?this.$9(a.ftype):b;a.fid>this.$3&&a.fid-this.$3<=A-1?c+=this.$1.writeByte(a.fid-this.$3<<4|b):(c+=this.$1.writeByte(b),c+=this.writeI16(a.fid));this.$3=a.fid;return c};b.$8=function(a){var b=0,c=this.$9(a.etype);a.size<=A-2?b+=this.$1.writeByte(a.size<<4|c):(b+=this.$1.writeByte(240|c),b+=this.writeVarint32(a.size));return b};b.readFieldBegin=function(){var a=this.$1.readByte(),b=a&15;if(b===(h||(h=c("ThriftTypes"))).STOP)return{ftype:(h||(h=c("ThriftTypes"))).STOP,fid:0};a=(a&240)>>>4;var d;a===0?d=this.readI16():d=this.$3+a;a=this.$10(b);(b===i.CT_BOOLEAN_TRUE||b===i.CT_BOOLEAN_FALSE)&&(this.$5=b===i.CT_BOOLEAN_TRUE);this.$3=d;return{ftype:a,fid:d}};b.readListBegin=function(){return this.$11()};b.readListEnd=function(){return 0};b.readSetBegin=function(){return this.$11()};b.readSetEnd=function(){return 0};b.readMapBegin=function(){var a=this.readVarint32();if(a>0){var b=this.$1.readByte(),c=this.$12(b>>4,"readMapBegin:key");b=this.$12(b&15,"readMapBegin:value");return{ktype:this.$10(c),vtype:this.$10(b),size:a}}return{size:a}};b.readMapEnd=function(){return 0};b.$12=function(a,b){if(a<0||a>13)throw new Error(b+" read invalid compact type: "+a);return a};b.$11=function(){var a=this.$1.readByte(),b=this.$12(a&15,"_readListOrSetBegin");b=this.$10(b);a=a>>4&15;a===15&&(a=this.readVarint32());return{etype:b,size:a}};b.readFieldEnd=function(){return 0};b.readByte=function(){this.$6.setUint8(0,this.$1.readByte());return this.$6.getInt8(0)};b.writeByte=function(a){if(a<m||a>l)throw new Error("byte to write is out of range: "+a);this.$6.setInt8(0,a);return this.$1.writeByte(this.$6.getUint8(0))};b.readFloat=function(){return this.$1.readFloatBE()};b.writeFloat=function(a){return this.$1.writeFloatBE(a)};b.readDouble=function(){return this.$1.readDoubleBE()};b.writeDouble=function(a){return this.$1.writeDoubleBE(a)};b.writeString=function(a){return this.writeBinary(d("StringToUtf8").StringToUtf8(a))};b.skip=function(a){switch(a){case(h||(h=c("ThriftTypes"))).STOP:return;case(h||(h=c("ThriftTypes"))).BOOL:this.readBool();break;case(h||(h=c("ThriftTypes"))).BYTE:this.readByte();break;case(h||(h=c("ThriftTypes"))).DOUBLE:this.readDouble();break;case(h||(h=c("ThriftTypes"))).I16:this.readI16();break;case(h||(h=c("ThriftTypes"))).I32:this.readI32();break;case(h||(h=c("ThriftTypes"))).I64:this.readI64();break;case(h||(h=c("ThriftTypes"))).STRING:this.readString();break;case(h||(h=c("ThriftTypes"))).STRUCT:this.readStructBegin();var b;while(!0){b=this.readFieldBegin();if(b.ftype===(h||(h=c("ThriftTypes"))).STOP)break;this.skip(b.ftype)}this.readStructEnd();break;case(h||(h=c("ThriftTypes"))).MAP:b=this.readMapBegin();if(b.size>0&&b.ktype!=null&&b.vtype!=null){var d=b.ktype,e=b.vtype;for(var f=0;f<b.size;f++)this.skip(d),this.skip(e)}break;case(h||(h=c("ThriftTypes"))).SET:case(h||(h=c("ThriftTypes"))).LIST:f=this.$11();for(d=0;d<f.size;d++)this.skip(f.etype);break;case(h||(h=c("ThriftTypes"))).FLOAT:this.readFloat();break;default:throw new Error("encoutered unknow thrift type: "+a+" in skip")}};b.toByteArray=function(){return this.$1.toByteArray()};b.writeFieldEnd=function(){return 0};b.writeFieldStop=function(){return this.$1.writeByte((h||(h=c("ThriftTypes"))).STOP)};b.writeI16=function(a){if(a<o||a>n)throw new Error("trying to write i16 out of range: "+a);return this.writeVarint32(this.i32ToZigzag(a))};b.readI16=function(){var a=this.zigzagToI32(this.readVarint32());if(a<o||a>n)throw new Error("read invalid i16: "+a);return a};b.writeI32=function(a){if(a<q||a>p)throw new Error("i32 out of range: "+a);return this.writeVarint32(this.i32ToZigzag(a))};b.readI32=function(){return this.zigzagToI32(this.readVarint32())};b.writeI64=function(a){return this.writeVarint64(this.i64ToZigzag(a))};b.readI64=function(){return this.zigzagToI64(this.readVarint64())};b.readBool=function(){var a;this.$5!=null?(a=this.$5,this.$5=null):a=this.$1.readByte()===i.CT_BOOLEAN_TRUE;return a};b.writeBool=function(a){var b=0;this.$4!=null?(b+=this.$7(this.$4,a?j.CT_BOOLEAN_TRUE:j.CT_BOOLEAN_FALSE),this.$4=null):b+=this.$1.writeByte(a?i.CT_BOOLEAN_TRUE:i.CT_BOOLEAN_FALSE);return b};b.readBinary=function(){var a=this.readVarint32();return a===0?new Uint8Array(0):this.$1.readBytes(a)};b.writeBinary=function(a){var b=0;b+=this.writeVarint32(a.length);b+=this.$1.write(a);return b};b.i32ToZigzag=function(a){if(a<q||a>p)throw new Error("number: "+a+" is out of range of i32");return(a<<1^(a<0?4294967295:0))>>>0};b.zigzagToI32=function(a){if(a<0||a>r)throw new Error("number: "+a+" is out of range of uint32");return a>>>1^-1*(a&1)};b.i64ToZigzag=function(a){if(a>s||a<t)throw new Error("i64 out of range: "+a.toString());return a>>v^a<<w};b.zigzagToI64=function(a){if(a<0||a>u)throw new Error("invalid uint64: "+a.toString());return(a&w)===w?~(a>>w):a>>w};b.writeVarint32=function(a){if(a<0||a>r)throw new Error("writeVarint32 received out of range uint32: "+a);a=a;var b=0;while(!0)if(a>>>7===0){this.$1.writeByte(a);b++;break}else this.$1.writeByte(a&127|128),b++,a>>>=7;return b};b.readVarint32=function(){var a=0,b=0,c;while(!0){c=this.$1.readByte();a=(a|(c&127)<<b)>>>0;b+=7;if((c&128)==0){if(b===35&&(c&240)!=0)throw new Error("result exceeded 32 bit limit");break}if(b>28)throw new Error("result exceeded 32 bit limit")}return a};b.writeVarint64=function(a){if(a<0||a>u)throw new Error("invalid uint64: "+a.toString());a=a;var b=0;while(!0)if(a>>x==0){this.$1.writeByte(Number(a));b++;break}else this.$1.writeByte(Number(a&y|z)),b++,a>>=x;return b};b.readVarint64=function(){var a=BigInt(0),b=BigInt(0),c;while(!0){c=BigInt(this.$1.readByte());a|=(c&y)<<b;b+=x;if((c&z)==0){if(b==70&&c!==w)throw new Error("result exceeded 64 bit limit");break}if(b>63)throw new Error("result exceeded 64 bit limit")}return a};b.readString=function(){return d("Utf8ToString").Utf8ToString(this.readBinary())};b.getLastFieldId=function(){return this.$3};b.getLastField=function(){return this.$2};b.getBooleanFieldInfo=function(){return this.$4};b.getBooleanValue=function(){return this.$5};b.$9=function(a){return k[a]};b.$10=function(a){switch(a){case i.CT_STOP:return(h||(h=c("ThriftTypes"))).STOP;case i.CT_BOOLEAN_FALSE:case i.CT_BOOLEAN_TRUE:return(h||(h=c("ThriftTypes"))).BOOL;case i.CT_BYTE:return(h||(h=c("ThriftTypes"))).BYTE;case i.CT_I16:return(h||(h=c("ThriftTypes"))).I16;case i.CT_I32:return(h||(h=c("ThriftTypes"))).I32;case i.CT_I64:return(h||(h=c("ThriftTypes"))).I64;case i.CT_DOUBLE:return(h||(h=c("ThriftTypes"))).DOUBLE;case i.CT_FLOAT:return(h||(h=c("ThriftTypes"))).FLOAT;case i.CT_BINARY:return(h||(h=c("ThriftTypes"))).STRING;case i.CT_LIST:return(h||(h=c("ThriftTypes"))).LIST;case i.CT_SET:return(h||(h=c("ThriftTypes"))).SET;case i.CT_MAP:return(h||(h=c("ThriftTypes"))).MAP;case i.CT_STRUCT:return(h||(h=c("ThriftTypes"))).STRUCT;default:throw new Error("don't know what type")}};return a}();g["default"]=a}),98);
__d("CompactSerializer",["TCompactProtocol","TNoOpWriteBuffer","TReadBuffer","TWriteBuffer"],(function(a,b,c,d,e,f,g){function a(a,b,c){try{return h(a,b)}catch(a){c!=null&&c(a)}return null}function h(a,b){a=new(c("TReadBuffer"))(a);a=new(c("TCompactProtocol"))(a);return b(a)}function b(a,b,c,d){c===void 0&&(c=!1);try{return i(a,b,c)}catch(a){d!=null&&d(a)}return null}function i(a,b,d){d===void 0&&(d=!1);if(d){d=new(c("TNoOpWriteBuffer"))();var e=new(c("TCompactProtocol"))(d);b(a,e);e=new(c("TWriteBuffer"))(d.currentSize())}else e=new(c("TWriteBuffer"))();d=new(c("TCompactProtocol"))(e);b(a,d);return d.toByteArray()}g.deserializeNoThrow=a;g.deserialize=h;g.serializeNoThrow=b;g.serialize=i}),98);