(function(app) {
    try { app = angular.module("uiFormEngine"); }
    catch(err) { app = angular.module("uiFormEngine", []); }
    app.run(["$templateCache", function($templateCache) {
    "use strict";
    
    $templateCache.put("irf/template/adminlte/actionbox.html","<div class=\"col-xs-12 action-box-col\">\n" +
        "  <div class=\"box no-border\" ng-init=\"$emit('box-init')\">\n" +
        "    <div class=\"box-body\" style=\"padding-right: 0\">\n" +
        "        <div class=\"schema-form-submit {{form.htmlClass}}\">\n" +
        "            <div class=\"schema-form-actions {{form.htmlClass}}\">\n" +
        "                <button ng-repeat-start=\"item in form.items\"\n" +
        "                        class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                        type=\"button\"\n" +
        "                        ng-if=\"item.type === 'save'\"\n" +
        "                        ng-disabled=\"form.readonly\"\n" +
        "                        ng-click=\"evalExpr('save()')\"\n" +
        "                        style=\"margin-right:10px\">\n" +
        "                        <i class=\"fa fa-save\">&nbsp;</i>\n" +
        "                        {{item.title | translate}}\n" +
        "                </button>\n" +
        "                <button class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                        type=\"submit\"\n" +
        "                        ng-if=\"item.type === 'submit'\"\n" +
        "                        ng-disabled=\"form.readonly\"\n" +
        "                        ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:item})\"\n" +
        "                        style=\"margin-right:10px\">\n" +
        "                        <i class=\"fa fa-circle-o\">&nbsp;</i>\n" +
        "                        {{item.title | translate}}\n" +
        "                </button>\n" +
        "                <button ng-repeat-end\n" +
        "                        class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                        type=\"button\"\n" +
        "                        ng-if=\"!(item.type === 'submit' || item.type === 'save')\"\n" +
        "                        ng-disabled=\"form.readonly\"\n" +
        "                        ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:item})\"\n" +
        "                        style=\"margin-right:10px\">\n" +
        "                        <i ng-if=\"item.icon\" class=\"{{item.icon}}\">&nbsp;</i>\n" +
        "                        {{item.title | translate}}\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/actions.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\">\n" +
        "    <label class=\"col-sm-4 hidden-xs control-label\"></label>\n" +
        "    <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "        <button ng-repeat-start=\"item in form.items\"\n" +
        "                class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                type=\"button\"\n" +
        "                ng-if=\"item.type === 'save'\"\n" +
        "                ng-disabled=\"form.readonly\"\n" +
        "                ng-click=\"evalExpr('save()')\"\n" +
        "                style=\"margin-right:10px\">\n" +
        "                <i class=\"fa fa-save\">&nbsp;</i>\n" +
        "                {{item.title | translate}}\n" +
        "        </button>\n" +
        "        <button class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                type=\"submit\"\n" +
        "                ng-if=\"item.type === 'submit'\"\n" +
        "                ng-disabled=\"form.readonly\"\n" +
        "                ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:item})\"\n" +
        "                style=\"margin-right:10px\">\n" +
        "                <i class=\"fa fa-circle-o\">&nbsp;</i>\n" +
        "                {{item.title | translate}}\n" +
        "        </button>\n" +
        "        <button ng-repeat-end\n" +
        "                class=\"btn {{ item.style ? item.style : 'btn-theme' }} {{item.fieldHtmlClass}}\"\n" +
        "                type=\"button\"\n" +
        "                ng-if=\"!(item.type === 'submit' || item.type === 'save')\"\n" +
        "                ng-disabled=\"form.readonly\"\n" +
        "                ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:item})\"\n" +
        "                style=\"margin-right:10px\">\n" +
        "                <i ng-if=\"item.icon\" class=\"{{item.icon}}\">&nbsp;</i>\n" +
        "                {{item.title | translate}}\n" +
        "        </button>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/amount.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "    <label for=\"{{form.key.slice(-1)[0]}}\" ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\" class=\"col-sm-4 control-label {{form.labelHtmlClass}}\">{{ form.title | translate }}</label>\n" +
        "    <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\" irf-amount>\n" +
        "        <span class=\"input-group-addon\" ng-bind-html=\"iconHtml\" ng-class=\"{readonly:form.readonly}\"></span>\n" +
        "        <input sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" ng-model-options=\"{updateOn:'blur'}\" irf-amount-formatter ng-disabled=\"form.readonly\" schema-validate=\"form\" ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\" ng-attr-type=\"{{form.readonly?'text':'number'}}\" class=\"form-control {{form.fieldHtmlClass}}\" placeholder=\"{{ form.placeholderExpr ? evalExpr(form.placeholderExpr, {form:form, arrayIndex:arrayIndex}) : (form.placeholder | translate) }}\" id=\"{{form.key.slice(-1)[0]}}\" step=\"any\"/>\n" +
        "        <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\"></span>\n" +
        "        <a ng-show=\"!form.readonly && form.calculator\" irf-calculator class=\"input-group-addon\" style=\"padding: 6px 8px;\" irf-model-value=\"$$value$$\" irf-form=\"form\" irf-model=\"model\" href=\"\">\n" +
        "            <i class=\"fa fa-calculator color-theme\"></i>\n" +
        "        </a>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/anchor.html","<div class=\"form-group schema-form-anchor {{form.htmlClass}}\">\n" +
        "    <label class=\"col-sm-4 hidden-xs control-label\"\n" +
        "        ng-class=\"{'sr-only': form.notitle}\"></label>\n" +
        "    <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "        <a class=\"{{ item.style ? item.style : 'color-theme' }} {{form.fieldHtmlClass}}\"\n" +
        "            href=\"\"\n" +
        "            ng-href=\"{{form.href}}\"\n" +
        "            ng-click=\"!form.href && evalExpr('buttonClick(event,form)', {event:$event,form:form})\"\n" +
        "            ng-disabled=\"form.readonly\">\n" +
        "            <i ng-if=\"form.icon\" class=\"{{form.icon}}\">&nbsp;</i>\n" +
        "            <span ng-if=\"form.html\" sg-bind-html=\"form.html\"></span>\n" +
        "            <span ng-if=\"!form.html\">{{ form.titleExpr ? evalExpr(form.titleExpr, {form:form, arrayIndex:arrayIndex}) : (form.title | translate) }}</span>\n" +
        "        </a>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/array.html","<div class=\"box-body form-horizontal array-box\" sf-field-model=\"sf-new-array\" sf-new-array=\"$$value$$\" ng-attr-id=\"{{form.key.join('_')}}\">\n" +
        "  <div schema-form-array-items sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" class=\"array-box-theme panel {{form.fieldHtmlClass}}\" ng-init=\"id=$root.elementsUtils.generateUUID(); arrayIndexes=evalExpr('getArrayIndexes(form.key, $index)', {form:form, $index: $index});titleExprLocals=$root._.extend({}, form.titleExprLocals, {form:form, arrayIndex: $index, arrayIndexes: arrayIndexes});\" ng-class=\"{'array-box-last':$last}\" ng-form name=\"ArrayItemForm\">\n" +
        "    <h4 ng-if=\"!form.notitle\" class=\"box-title box-title-theme\" ng-class=\"{'error':ArrayItemForm.$dirty && ArrayItemForm.$invalid}\">\n" +
        "      <span class=\"text\" ng-attr-data-toggle=\"{{form.view==='fixed'?'':'collapse'}}\" ng-attr-data-target=\"#{{id}}\" ng-attr-data-parent=\"#{{form.key.join('_')}}\" ng-class=\"{'fixed':form.view==='fixed'}\">{{ ($first ? ($$value$$.length > 1 ? \"1. \":\"\") : ($index + 1) + \". \") + (form.titleExpr ? evalExpr(form.titleExpr, titleExprLocals) : (form.title | translate)) }}</span>\n" +
        "      <span ng-hide=\"form.readonly || form.remove === null\" class=\"pull-right\" style=\"margin-right:0;margin-top:1px\">\n" +
        "        <span class=\"controls\" style=\"padding:0 0 0 7px;\">\n" +
        "          <a  ng-click=\"$emit('irfSfDeleteFromArray', [$index, (form.titleExpr ? evalExpr(form.titleExpr, titleExprLocals) : (form.title | translate)),form])\"><i class=\"fa fa-close\"></i></a>\n" +
        "        </span>\n" +
        "      </span>\n" +
        "    </h4>\n" +
        "    <div class=\"ng-scope collapse\" ng-class=\"{in:($last && form.add!==null || form.view==='fixed')}\" ng-attr-id=\"{{id}}\">\n" +
        "      <sf-decorator ng-init=\"arrayIndex = $index; copyWithIndex($index);\" form=\"copyWithIndex($index)\" class=\"ng-scope\"></sf-decorator>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-hide=\"form.readonly || form.add === null\" class=\"array-add-btn-wrapper pull-right\">\n" +
        "    <button ng-click=\"appendToArray();evalExpr('onArrayAdd(event, form, nthModel)', {event:$event, form:form, nthModel:$$value$$[$$value$$.length-1]})\"\n" +
        "            ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\"\n" +
        "            class=\"btn btn-sm btn-theme {{ form.style.add || 'btn-default' }}\">\n" +
        "      <i class=\"fa fa-plus\">&nbsp;</i>\n" +
        "      {{ form.title | translate }}\n" +
        "    </button>\n" +
        "  </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/box.html","<div class=\"{{ form.colClass ? form.colClass : 'col-sm-6' }} box-col closed\" ng-form name=\"BoxForm\">\n" +
        "  <div class=\"box\" ng-attr-id=\"{{pid}}\" ng-init=\"pid=form.title.split(' ').join('_');$emit('box-init');$on('$destroy',evalExpr('boxDestroy()'))\"\n" +
        "    ng-class=\"{'box-danger':BoxForm.$dirty && BoxForm.$invalid, 'box-theme':!BoxForm.$dirty || !BoxForm.$invalid}\" irf-merge-form=\"form\">\n" +
        "    <div class=\"box-header with-border\" ng-init=\"id=pid+'_'+$id+'_body'\" data-toggle=\"collapse\" ng-attr-data-target=\"#{{id}}\" ng-attr-data-parent=\"#{{pid}}\">\n" +
        "      <h3 class=\"box-title\">{{form.titleExpr ? evalExpr(form.titleExpr, {form:form}) : (form.title | translate)}}</h3>\n" +
        "    </div>\n" +
        "    <div class=\"box-body form-horizontal collapse in\" ng-attr-id=\"{{id}}\">\n" +
        "      <sf-decorator ng-repeat=\"item in form.items\" form=\"item\" class=\"ng-scope\"></sf-decorator>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/button.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\">\n" +
        "    <label class=\"col-sm-4 hidden-xs control-label\"\n" +
        "        ng-class=\"{'sr-only': form.notitle}\"></label>\n" +
        "    <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "        <button class=\"btn {{ form.style ? form.style : 'btn-theme' }} {{form.fieldHtmlClass}}\"\n" +
        "                type=\"submit\"\n" +
        "                ng-if=\"form.type==='submit'\"\n" +
        "                ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:form})\"\n" +
        "                ng-disabled=\"form.readonly\">\n" +
        "            <span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span>\n" +
        "            {{form.title | translate}}\n" +
        "        </button>\n" +
        "        <button class=\"btn {{ form.style ? form.style : 'btn-theme' }} {{form.fieldHtmlClass}}\"\n" +
        "                type=\"button\"\n" +
        "                ng-if=\"form.type!=='submit'\"\n" +
        "                ng-click=\"evalExpr('buttonClick(event,form)', {event:$event,form:form})\"\n" +
        "                ng-disabled=\"form.readonly\">\n" +
        "            <span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span>\n" +
        "            {{form.title | translate}}\n" +
        "        </button>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/checkbox.html","<div class=\"form-group checkbox schema-form-checkbox {{form.htmlClass}}\">\n" +
        "  <div class=\"col-sm-4 hidden-xs\" ng-class=\"{'sr-only': form.fullwidth || !showTitle()}\"></div>\n" +
        "  <div class=\"col-sm-{{(form.notitle || form.fullwidth) ? '12' : '8'}}\">\n" +
        "    <div class=\"form-control\">\n" +
        "      <label class=\"checkbox-inline checkbox-theme {{form.labelHtmlClass}}\">\n" +
        "        <input type=\"checkbox\"\n" +
        "               sf-field-model\n" +
        "               ng-model=\"$$value$$\"\n" +
        "               ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "               ng-disabled=\"form.readonly\"\n" +
        "               class=\"{{form.fieldHtmlClass}}\"\n" +
        "               name=\"{{form.key.slice(-1)[0]}}\">\n" +
        "        <span class=\"control-indicator\"></span>\n" +
        "        <span ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\" ng-bind-html=\"form.title | translate\"></span>\n" +
        "      </label>\n" +
        "    </div>\n" +
        "    <div class=\"help-block\" sf-message=\"form.description | translate\"></div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/datatable-lite.html","<div>\n" +
        "    <irf-data-table-lite irf-model=\"$$value$$\" irf-dtl-config=\"form.dtlConfig\" irf-parent-model=\"model\">\n" +
        "    </irf-data-table-lite>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/date.html","<div class=\"form-group form-with-hidden {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label {{form.labelHtmlClass}}\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <input sf-field-model=\"replaceAll\"\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           schema-validate=\"form\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           type=\"hidden\" irf-pikaday=\"form\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" />\n" +
        "    <input class=\"form-control {{form.fieldHtmlClass}}\" ng-disabled=\"form.readonly\" placeholder=\"{{form.readonly?'':'DDMMYYYY'}}\"/>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "    <div ng-if=\"$$value$$ && !form.readonly\" style=\"position:absolute;top:0;right:0;margin-right:15px\">\n" +
        "      <button ng-click=\"$$value$$ = '';evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:'', event:$event})\"\n" +
        "        onClick=\"event.preventDefault();$($(event.target).parents('.form-group')[0]).find('input.form-control').val(null)\"\n" +
        "        class=\"btn btn-box-tool btn-xs\"\n" +
        "        style=\"padding-left:5px;padding-right:7px;outline:none\" tabindex=\"-1\"><i class=\"fa fa-times\"></i></button>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/default-view.html","<div ng-init=\"$_value=$root._.get(model, form.key)\">\n" +
        "	<div class=\"form-group default-view {{form.htmlClass}}\">\n" +
        "		<div ng-hide=\"form.notitle || form.fullwidth\" class=\"col-sm-4\">\n" +
        "			{{ form.titleExpr ? evalExpr(form.titleExpr, {form:form, arrayIndex:arrayIndex}) : (form.title | translate) }}\n" +
        "		</div>\n" +
        "		<ng-switch on=\"form.sfType\">\n" +
        "			<div ng-switch-when=\"html\" class=\"view-value col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "				<strong sg-bind-html=\"$_value\"></strong>&nbsp;\n" +
        "			</div>\n" +
        "			<div ng-switch-when=\"number\" class=\"view-value text-right col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "				<strong ng-bind=\"$_value\"></strong>&nbsp;\n" +
        "			</div>\n" +
        "			<div ng-switch-when=\"amount\" class=\"view-value text-right col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "				<strong ng-bind=\"form.symbolPosition=='left'?($_value|irfCurrency):($_value|irfCurrency:null:null:null:null:null:null:'right')\"></strong>&nbsp;\n" +
        "			</div>\n" +
        "			<div ng-switch-default class=\"view-value col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "				<strong ng-bind=\"$_value\"></strong>&nbsp;\n" +
        "			</div>\n" +
        "		</ng-switch>\n" +
        "	</div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/default.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label {{form.labelHtmlClass}}\">\n" +
        "    {{ form.titleExpr ? evalExpr(form.titleExpr, {form:form, arrayIndex:arrayIndex}) : (form.title | translate) }}\n" +
        "  </label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <input sf-field-model\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-model-options=\"{updateOn:'blur'}\"\n" +
        "           ng-disabled=\"form.readonly\"\n" +
        "           schema-validate=\"form\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           type=\"{{:: form.inputmode && form.inputmode=='number'? (form.numberType)?form.numberType:'number' :false || form.type || 'text' }}\"\n" +
        "           step=\"any\"\n" +
        "           ng-attr-irf-to-number=\"{{ form.inputmode==='number' && form.numberType==='number' || undefined }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "           placeholder=\"{{ form.placeholderExpr ? evalExpr(form.placeholderExpr, {form:form, arrayIndex:arrayIndex}) : (form.placeholder | translate) }}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" ng-style = \"(form.numberType == 'tel' && form.type == 'password') ? {'-webkit-text-security' : 'disc'} : {}\"/>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\"></span>\n" +
        "    <a ng-show=\"!form.readonly && form.calculator\" class=\"calculator-default\" irf-calculator irf-model-value=\"$$value$$\" irf-form=\"form\" irf-model=\"model\" href=\"\">\n" +
        "      <i class=\"fa fa-calculator color-theme\"></i>\n" +
        "    </a>\n" +
        "  </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/expandable-section.html","<div style=\"clear:both;padding:10px 0 5px\">\n" +
        "	<a href=\"\" class=\"color-theme\" form=\"form\" ng-click=\"form.expanded=!form.expanded\" onClick=\"$(this).parent().next().slideToggle(function(){window.dispatchEvent(new Event('resize'))})\">{{(form.expanded?(form.hideTitle?form.hideTitle:'HIDE_DETAILS'):(form.title?form.title:'VIEW_DETAILS'))|translate}}</a>\n" +
        "</div>\n" +
        "<div style=\"display:{{::form.expanded?'block':'none'}}\">\n" +
        "	<sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\">\n" +
        "  <h4 class=\"box-title box-title-theme\" ng-class=\"{'sr-only': !showTitle() }\">\n" +
        "    <span class=\"text\" style=\"padding: 0 5px;\">{{ form.title | translate }}</span>\n" +
        "  </h4>\n" +
        "  <div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div>\n" +
        "  <sf-decorator ng-repeat=\"item in form.items\" form=\"item\" class=\"ng-scope\"></sf-decorator>\n" +
        "</fieldset>")
    
    $templateCache.put("irf/template/adminlte/geotag.html","<div class=\"form-group geotag {{form.htmlClass}}\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "    <div class=\"form-control\" style=\"border:none;height:inherit\">\n" +
        "      <irf-geotag\n" +
        "      	sf-field-model=\"replaceAll\"\n" +
        "      	watch-value=\"$$value$$\"\n" +
        "      	model=\"model\"\n" +
        "      	latitude=\"form.latitude\"\n" +
        "      	longitude=\"form.longitude\"\n" +
        "        latitude-value=\"{{ evalInScope(form.latitudeExpr) }}\"\n" +
        "        longitude-value=\"{{ evalInScope(form.longitudeExpr) }}\"\n" +
        "      	read-only=\"form.readonly\"></irf-geotag>\n" +
        "    </div>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{ error.message }}&nbsp;</span>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/grid.html","<!-- <div class=\"grid-container\">\n" +
        "	<sf-decorator ng-class=\"form.orientation==horizontal?'grid-horizontal-element':'grid-vertical-element'\" ng-repeat=\"item in form.items\" form=\"item\" class=\"ng-scope\"></sf-decorator>\n" +
        "</div> -->\n" +
        "<div ng-repeat=\"item in form.items\" class=\"{{form.orientation=='horizontal'?'col-sm-'+$root._.ceil(12/form.items.length):'row'}}\">\n" +
        "	<sf-decorator form=\"item\" class=\"ng-scope\"></sf-decorator>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\"\n" +
        "ng-bind-html=\"form.helpExpr ? evalExpr(form.helpExpr, {form:form}) : form.helpvalue\"></div>")
    
    $templateCache.put("irf/template/adminlte/html.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label ng-class=\"{'sr-only': !showTitle()}\"\n" +
        "         class=\"col-sm-4 control-label {{form.labelHtmlClass}}\">\n" +
        "    {{ form.titleExpr ? evalExpr(form.titleExpr, {form:form, arrayIndex:arrayIndex}) : (form.title | translate) }}\n" +
        "  </label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <div sf-field-model sg-bind-html=\"$$value$$\" style=\"padding-top:7px\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/input-aadhar.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <input sf-field-model\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-disabled=\"form.readonly\"\n" +
        "           schema-validate=\"form\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           type=\"{{:: form.type || 'text' }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "           placeholder=\"{{form.placeholder|translate}}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" />\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "\n" +
        "   	<a href=\"\" ng-hide=\"form.readonly\" irf-aadhar irf-aadhar-fieldmap=\"form.outputMap\" irf-aadhar-model=\"model\" style=\"position:absolute;top:-4px;right:0;padding:0 19px;font-size:2rem\">\n" +
        "      <i class=\"fa fa-qrcode color-theme\"></i>\n" +
        "    </a>\n" +
        "\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/input-file.html","<div class=\"form-group form-with-hidden\" ng-form name=\"SingleInputForm\">\n" +
        "	<label for=\"{{::id}}\"\n" +
        "        ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "		class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "	<div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "		<input\n" +
        "			type=\"hidden\"\n" +
        "			sf-field-model=\"replaceAll\"\n" +
        "			ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "			schema-validate=\"form\"\n" +
        "			ng-model=\"$$value$$\" />\n" +
        "		<irf-input-file irf-form=\"form\" irf-model=\"model\" irf-model-value=\"$$value$$\"></irf-input-file>\n" +
        "		<span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "			(form.required ?\n" +
        "			\"Required \" : \"\")\n" +
        "			+ (form.type ?\n" +
        "			(form.type | initcap) : \"Text\")\n" +
        "			+ (form.minlength ?\n" +
        "			\" Min: \" + form.minlength : \"\")\n" +
        "			+ (form.maxlength ?\n" +
        "			\" Max: \" + form.maxlength : \"\")\n" +
        "			}}&nbsp;\n" +
        "		</span>\n" +
        "	</div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/input-lov.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "      <input sf-field-model=\"replaceAll\"\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-model-options=\"{updateOn:'blur'}\"\n" +
        "           ng-disabled=\"form.readonly || form.lovonly\"\n" +
        "           schema-validate=\"form\" ng-if=\"(form.uiType == undefined || form.uiType != 'textarea' )\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           type=\"{{:: form.inputmode && form.inputmode=='number'? (form.numberType)?form.numberType:'number' :false || form.fieldType || 'text' }}\"\n" +
        "           ng-attr-irf-to-number=\"{{ form.inputmode==='number' && form.numberType==='number' || undefined }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}} \"\n" +
        "           placeholder=\"{{form.placeholder|translate}}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" />\n" +
        "      <textarea sf-field-model=\"replaceAll\" rows= \"{{form.calculatedRows}}\"\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-model-options=\"{updateOn:'blur'}\"\n" +
        "           ng-disabled=\"form.readonly || form.lovonly\" ng-style=\"form.expandTextarea($$value$$)\"\n" +
        "           schema-validate=\"form\"  ng-keyup=\"autoExpand($event)\" ng-if=\"(form.uiType != undefined && form.uiType == 'textarea' )\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           ng-attr-irf-to-number=\"{{ form.inputmode==='number' && form.numberType==='number' || undefined }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}} \"  \n" +
        "           placeholder=\"{{form.placeholder|translate}}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" >\n" +
        "      </textarea>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "\n" +
        "   	<a ng-hide=\"form.readonly || (form.lovonly && $$value$$ && form.clear)\"  irf-lov irf-model-value=\"$$value$$\" irf-form=\"form\" irf-model=\"model\"\n" +
        "      style=\"position:absolute;top:0;right:15px;padding:7px 9px 6px;\" href=\"\">\n" +
        "      <i class=\"fa fa-bars color-theme\"></i>\n" +
        "    </a>\n" +
        "    <a ng-show=\"!form.readonly && form.lovonly && form.clear && $$value$$\"\n" +
        "      style=\"position:absolute;top:0;right:15px;padding:7px 9px 6px;\" href=\"\" ng-click=\"$$value$$ = null\">\n" +
        "      <i class=\"fa fa-times \"></i>\n" +
        "    </a>\n" +
        "\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/irf-structured-filter.html","<div irf-structured-filter irf-model-value=\"$$value$$\" irf-form=\"form\" irf-model=\"model\">\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/mobile.html","<div class=\"form-group\" ng-form name=\"SingleInputForm\">\n" +
        "    <!-- <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\"> -->\n" +
        "        <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "        ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "        class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "      <div\n" +
        "        style=\"position:relative;\"\n" +
        "       class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "        <irf-mobile\n" +
        "        sf-field-model=\"replaceAll\"\n" +
        "        irf-form=\"form\"\n" +
        "        irf-model-value=\"$$value$$\"\n" +
        "        irf-model=\"model\"\n" +
        "        irf-otp-sent=\"false\"\n" +
        "        irf-is-verified = \"false\"\n" +
        "        irf-retry-count=\"false\"\n" +
        "        irf-verified-value=\"{{evalInScope(form.verificationExpr)}}\"\n" +
        "        irf-error=\"false\"\n" +
        "      >\n" +
        "      </irf-mobile>\n" +
        "      <!-- </div> -->\n" +
        "      <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "          (form.required ?\n" +
        "            \"Required \" : \"\")\n" +
        "          + (form.type ?\n" +
        "            (form.type | initcap) : \"Text\")\n" +
        "          + (form.minlength ?\n" +
        "            \" Min: \" + form.minlength : \"\")\n" +
        "          + (form.maxlength ?\n" +
        "            \" Max: \" + form.maxlength : \"\")\n" +
        "        }}&nbsp;</span>\n" +
        "      </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/pivotarray.html","<div ng-init=\"form.enumCode = form.pivotFieldEnumCode ? form.pivotFieldEnumCode : form.schema.pivotFieldEnumCode; evalExpr('registerForTitleMap(form)', {form:form}); form.id=form.key.slice(-1)[0]\" irf-options-builder=\"form\">\n" +
        "\n" +
        "  <div ng-repeat=\"(indexX, main) in form.filteredTitleMap\">\n" +
        "    <div class=\"box-body form-horizontal array-box pivotarraybox\" sf-field-model=\"sf-new-array\" sf-new-array=\"$$value$$\" ng-attr-id=\"{{form.key.join('_')}}\">\n" +
        "\n" +
        "      <div schema-form-array-items sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-if=\"item[form.pivotField] == main.value\" class=\"array-box-theme panel {{form.fieldHtmlClass}}\" ng-init=\"id=form.key.join('_')+'_'+($index+1); arrayIndexes=evalExpr('getArrayIndexes(form.key, $index)', {form:form, $index: $index});titleExprLocals=$root._.extend({}, form.titleExprLocals, {form:form, arrayIndex: $index, arrayIndexes: arrayIndexes});\" ng-class=\"{'array-box-last':$last}\" ng-form name=\"ArrayItemForm\">\n" +
        "\n" +
        "       <h4 ng-if=\"!form.notitle\" class=\"box-title box-title-theme\" ng-class=\"{'error':ArrayItemForm.$dirty && ArrayItemForm.$invalid}\">\n" +
        "\n" +
        "        <span class=\"text pivotarraytitlespan\" ng-attr-data-toggle=\"{{form.view==='fixed'?'':'collapse'}}\" ng-attr-data-target=\"#{{id}}\" ng-attr-data-parent=\"#{{form.key.join('_')}}\" ng-class=\"{'fixed':form.view==='fixed'}\">{{ (form.titleExpr ? evalExpr(form.titleExpr,$root._.extend(form.titleExprLocals,{pivotValue:main.value})) : main.value) | translate }}</span>\n" +
        "        <span ng-hide=\"form.readonly || form.remove === null\" class=\"pull-right\" style=\"margin-right:0;margin-top:1px\">\n" +
        "          <span class=\"controls\" style=\"padding:0 0 0 7px;\">\n" +
        "            <a ng-click=\"$emit('irfSfDeleteFromArray', [$index, (main.value | translate)])\"><i class=\"fa fa-close\"></i></a>\n" +
        "          </span>\n" +
        "        </span>\n" +
        "      </h4>\n" +
        "      <div class=\"ng-scope collapse\" ng-class=\"{in:($last && form.add!==null || form.view==='fixed')}\" ng-attr-id=\"{{id}}\">\n" +
        "\n" +
        "        <sf-decorator ng-init=\"arrayIndex = $index; copyWithIndex($index);\" form=\"copyWithIndex($index)\" class=\"ng-scope\"></sf-decorator>\n" +
        "\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-hide=\"form.readonly || form.add === null\" class=\"array-add-btn-wrapper pull-right\">\n" +
        "    <button ng-click=\"t={};t[form.pivotField]=main.value;$$value$$.push(t);evalExpr('onArrayAdd(event, form, nthModel)', {event:$event, form:form, nthModel:$$value$$[$$value$$.length-1]})\"\n" +
        "    ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\"\n" +
        "    class=\"btn btn-sm btn-theme {{ form.style.add || 'btn-default' }}\">\n" +
        "    <i class=\"fa fa-plus\">&nbsp;</i>\n" +
        "\n" +
        "    {{form.addButtonExpr ? evalExpr(form.addButtonExpr, {pivotValue: main.value}) :  main.value | translate }}\n" +
        "  </button>\n" +
        "\n" +
        "</div>\n" +
        "<br />\n" +
        "</div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/qrcode.html","<div class=\"form-group {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <input sf-field-model=\"replaceAll\"\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-disabled=\"form.readonly\"\n" +
        "           schema-validate=\"form\"\n" +
        "           ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "           type=\"{{:: form.type || 'text' }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "           placeholder=\"{{form.placeholder|translate}}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" />\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "\n" +
        "   	<a href=\"\" ng-hide=\"form.readonly\" irf-zxing=\"$$value$$\" irf-zxing-form=\"form\" irf-zxing-model=\"model\" style=\"position:absolute;top:-4px;right:0;padding:0 19px;font-size:2rem\">\n" +
        "      <i class=\"fa fa-{{form.type==='qrcode'?'qrcode':(form.type==='barcode'?'barcode':'code')}} color-theme\"></i>\n" +
        "    </a>\n" +
        "\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/radios.html","<div class=\"form-group {{form.htmlClass}} radios\" ng-form name=\"SingleInputForm\">\n" +
        "  <label class=\"col-sm-4 control-label {{form.labelHtmlClass}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         for=\"{{form.key.slice(-1)[0]}}\">\n" +
        "    {{ form.titleExpr ? evalExpr(form.titleExpr, {form:form}) : (form.title | translate) }}\n" +
        "  </label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <div class=\"form-control {{form.readonly?'read-only':''}}\"\n" +
        "        ng-init=\"form.enumCode = form.enumCode ? form.enumCode : form.schema.enumCode; evalExpr('registerForTitleMap(form)', {form:form})\">\n" +
        "      <label\n" +
        "        class=\"radio-item radio-theme {{form.readonly?'read-only':''}}\"\n" +
        "        ng-repeat=\"item in (form.titleMap | filter:form._filters:true)\"\n" +
        "        ng-if=\"!form.readonly || $$value$$ == item.value\">\n" +
        "        <input type=\"radio\"\n" +
        "          class=\"{{form.fieldHtmlClass}}\"\n" +
        "          ng-if=\"!form.readonly\"\n" +
        "          sf-field-model=\"replaceAll\"\n" +
        "          schema-validate=\"form\"\n" +
        "          ng-model=\"$$value$$\"\n" +
        "          ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "          ng-value=\"item.value\"\n" +
        "          name=\"{{form.key.join('$')}}\"\n" +
        "        /><!-- \n" +
        "          ng-change=\"$emit('irfSelectValueChanged', [form.enumCode, (form.titleMap | filter:{value:$$value$$})[0].code])\" -->\n" +
        "        <span ng-if=\"!form.readonly\" class=\"control-indicator\"></span>\n" +
        "        <span class=\"radio-label\">{{ item.name | translate }}</span>\n" +
        "      </label>&nbsp;\n" +
        "    </div>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\"></span>\n" +
        "  </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/section.html","<div class=\"schema-form-section {{form.htmlClass}}\">\n" +
        "	<div ng-if=\"form.html\" sg-bind-html=\"form.html\"></div>\n" +
        "	<sf-decorator ng-if=\"!form.html\" ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/select.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">\n" +
        "    {{ form.titleExpr ? evalExpr(form.titleExpr, {form:form}) : (form.title | translate) }}\n" +
        "  </label>{{helper}}\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <!--input ng-if=\"form.readonly\"\n" +
        "           ng-model=\"$$value$$\"\n" +
        "           ng-disabled=\"form.readonly\"\n" +
        "           type=\"text\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}}\" /-->\n" +
        "    <select sf-field-model=\"replaceAll\"\n" +
        "      ng-model=\"$$value$$\"\n" +
        "      ng-if=\"form.readonly\"\n" +
        "      schema-validate=\"form\"\n" +
        "      class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "      id=\"{{form.id}}\" name=\"{{form.id}}\"\n" +
        "      ng-init=\"form.enumCode = form.enumCode ? form.enumCode : form.schema.enumCode; evalExpr('registerForTitleMap(form)', {form:form}); form.id=form.key.slice(-1)[0]\"\n" +
        "      irf-options-builder=\"form\"\n" +
        "      ng-options=\"item.value as item.name for item in form.filteredTitleMap\"\n" +
        "      ng-disabled=\"form.readonly\"\n" +
        "    ></select>\n" +
        "    <select sf-field-model=\"replaceAll\"\n" +
        "      ng-model=\"$$value$$\"\n" +
        "      ng-if=\"!form.readonly\"\n" +
        "      ng-change=\"evalExpr('callSelectOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "      schema-validate=\"form\"\n" +
        "      class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "      id=\"{{form.id}}\" name=\"{{form.id}}\"\n" +
        "      ng-init=\"form.enumCode = form.enumCode ? form.enumCode : form.schema.enumCode; evalExpr('registerForTitleMap(form)', {form:form}); form.id=form.key.slice(-1)[0]\"\n" +
        "      irf-options-builder=\"form\"\n" +
        "      ng-options=\"item.value as item.name group by item.group for item in form.filteredTitleMap\"\n" +
        "    >\n" +
        "      <option value=\"\">{{('CHOOSE'|translate)+' '+(form.title|translate)}}</option>\n" +
        "    </select>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/table-view.html","<div irf-sf-table-view=\"form\">\n" +
        "	<h4 ng-show=\"form.title\" class=\"box-title box-title-theme\" ng-class=\"{'sr-only': !showTitle() }\">\n" +
        "		<span class=\"text\" style=\"padding: 0 5px;\">{{ form.title | translate }}</span>\n" +
        "	</h4>\n" +
        "	<irf-table-view ng-if=\"!form.transpose\"\n" +
        "	    table-options=\"options\"\n" +
        "	    table-data=\"$$value$$\"\n" +
        "	></irf-table-view>\n" +
        "	<irf-transpose-view ng-if=\"form.transpose\"\n" +
        "	    table-options=\"options\"\n" +
        "	    table-data=\"$$value$$\"\n" +
        "	></irf-transpose-view>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/adminlte/table.html","<table class=\"table sf-table {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"$$value$$\">\n" +
        "	<tbody>\n" +
        "		<tr>\n" +
        "			<th ng-repeat=\"ft in form.items\" ng-class=\"{'required':ft.required&&!ft.readonly}\">\n" +
        "				{{( ft.titleExpr ? evalExpr(ft.titleExpr, {ft:ft,arrayIndex:$index}) : (ft.title | translate)) }}\n" +
        "			</th>\n" +
        "		</tr>\n" +
        "		<tr schema-form-array-items sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-init=\"pindex=$index\">\n" +
        "			<td ng-repeat=\"item in form.items\" ng-init=\"item.fullwidth=(item.type==='checkbox'?true:!(item.notitle=true))\">\n" +
        "				<!-- <sf-decorator form=\"copyWithIndex($index)\"></sf-decorator> -->\n" +
        "				<sf-decorator form=\"item\" ng-init=\"evalExpr('initTableCell(item, index)', {item:item, index:pindex})\"></sf-decorator>\n" +
        "			</td>\n" +
        "		</tr>\n" +
        "	</tbody>\n" +
        "	<tfoot>\n" +
        "		<div ng-hide=\"form.readonly || form.add === null\" class=\"table-add-btn-wrapper pull-right\">\n" +
        "			<button ng-click=\"appendToArray()\"\n" +
        "				ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\"\n" +
        "				class=\"btn btn-sm btn-theme {{ form.style.add || 'btn-default' }}\">\n" +
        "				<i class=\"fa fa-plus\">&nbsp;</i>\n" +
        "				{{ form.title | translate }}\n" +
        "			</button>\n" +
        "		</div>\n" +
        "	</tfoot>\n" +
        "</table>")
    
    $templateCache.put("irf/template/adminlte/tablebox.html","<div class=\"col-sm-6 box-col\">\n" +
        "  <div class=\"box box-theme\">\n" +
        "    <div class=\"box-header with-border\">\n" +
        "        <h3 class=\"box-title\">{{form.title | translate}}</h3>\n" +
        "        <div class=\"box-tools pull-right\">\n" +
        "            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\">\n" +
        "                <i class=\"fa fa-chevron-down\"></i></button>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"box-body no-padding\">\n" +
        "        <irf-simple-table table-promise=\"form.tablePromise(key)\" table-key=\"$$value$$\" sf-field-model=\"replaceAll\"></irf-simple-table>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/tabs.html","<div ng-init=\"selected = { tab: 0 }\" class=\"schema-form-tabs {{form.htmlClass}}\">\n" +
        "  <ul class=\"nav nav-tabs\">\n" +
        "    <li ng-repeat=\"tab in form.tabs\"\n" +
        "        ng-disabled=\"form.readonly\"\n" +
        "        ng-click=\"$event.preventDefault() || (selected.tab = $index); tab.onOpen($index)\"\n" +
        "        ng-class=\"{active: selected.tab === $index}\">\n" +
        "        <a href=\"#\">{{ tab.title }}</a>\n" +
        "    </li>\n" +
        "  </ul>\n" +
        "\n" +
        "  <div class=\"tab-content {{form.fieldHtmlClass}}\">\n" +
        "    <sf-decorator ng-repeat=\"item in form.tabs[selected.tab].items\" form=\"item\" class=\"ng-scope\"></sf-decorator>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/textarea.html","<div class=\"form-group has-feedback {{form.htmlClass}} schema-form-textarea\"\n" +
        "     ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label {{form.labelHtmlClass}}\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\">\n" +
        "    <textarea ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\n" +
        "              class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "              id=\"{{form.key.slice(-1)[0]}}\"\n" +
        "              ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "              placeholder=\"{{form.placeholder|translate}}\"\n" +
        "              ng-disabled=\"form.readonly\"\n" +
        "              sf-field-model\n" +
        "              ng-model=\"$$value$$\"\n" +
        "              ng-model-options=\"{updateOn:'blur'}\"\n" +
        "              schema-validate=\"form\"\n" +
        "              name=\"{{form.key.slice(-1)[0]}}\"></textarea>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "      (form.required ?\n" +
        "        \"Required \" : \"\")\n" +
        "      + (form.type ?\n" +
        "        (form.type | initcap) : \"Text\")\n" +
        "      + (form.minlength ?\n" +
        "        \" Min: \" + form.minlength : \"\")\n" +
        "      + (form.maxlength ?\n" +
        "        \" Max: \" + form.maxlength : \"\")\n" +
        "    }}&nbsp;</span>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/timeline.html","<section class=\"content\">\n" +
        "	<div class=\"row {{form.htmlClass}}\">\n" +
        "		<div class=\"col-sm-12\">\n" +
        "			<ul class=\"timeline\" irf-timeline=\"_timeline\" irf-timeline-form=\"form\" irf-timeline-model=\"model\">\n" +
        "				<li ng-repeat-start=\"_tl in ::_timeline track by $index\" ng-if=\"_tl._timeLabel\" class=\"time-label\"><span class=\"bg-red\">{{::_tl._timeLabel}}</span></li>\n" +
        "				<li ng-repeat-end ng-if=\"!_tl._timeLabel\">\n" +
        "					<i class=\"fa fa-clock-o bg-active-theme\"></i>\n" +
        "					<div class=\"timeline-item\">\n" +
        "						<span class=\"time\"><i class=\"fa fa-clock-o\">&nbsp;</i>{{::_tl.$moment.fromNow()}}</span>\n" +
        "						<h3 class=\"timeline-header\" sg-bind-html=\"::_tl._titleHtml\"></h3>\n" +
        "						<div class=\"timeline-body\" sg-bind-html=\"::_tl._bodyHtml\"></div>\n" +
        "						<div class=\"timeline-footer\" ng-if=\"::_tl._footerHtml\" sg-bind-html=\"::_tl._footerHtml\"></div>\n" +
        "					</div>\n" +
        "				</li>\n" +
        "			</ul>\n" +
        "		</div>\n" +
        "	</div>\n" +
        "</section>")
    
    $templateCache.put("irf/template/adminlte/uiselect.html","<div class=\"form-group {{form.htmlClass}} sf-uiselect\" ng-form name=\"SingleInputForm\" ng-init=\"id=form.key.join('_')\">\n" +
        "  <label for=\"{{id}}\"\n" +
        "         ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "         class=\"col-sm-4 control-label\">\n" +
        "    {{ form.titleExpr ? evalExpr(form.titleExpr, {form:form}) : (form.title | translate) }}\n" +
        "  </label>{{helper}}\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}}\" style=\"position:relative;\"\n" +
        "    sf-field-model=\"replaceAll\"\n" +
        "  >\n" +
        "    <irf-select-handler irf-select-form=\"form\" irf-select-model=\"model\" irf-select-model-value=\"$$value$$\"></irf-select-handler>\n" +
        "    <span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\"></span> \n" +
        "  </div>\n" +
        "  <input\n" +
        "    type=\"hidden\"\n" +
        "    schema-validate=\"form\"\n" +
        "    ng-model=\"$$value$$\"\n" +
        "    id=\"{{id}}_hidden\"\n" +
        "  />\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/userbranch.html","<div class=\"form-group user-branch {{form.htmlClass}}\" ng-form name=\"SingleInputForm\">\n" +
        "  <label for=\"{{form.key.slice(-1)[0]}}\"\n" +
        "    ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "    class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "  <div class=\"col-sm-{{form.notitle ? '12' : '8'}} userbranch\" irf-user-branch=\"form\">\n" +
        "    <input sf-field-model=\"replaceAll\"\n" +
        "      ng-model=\"form.branchMap[$$value$$].name\"\n" +
        "      placeholder=\"{{:: ('CHOOSE'|translate) + ' ' + (form.title|translate) }}\"\n" +
        "      ng-disabled=\"form.readonly\"\n" +
        "      readonly\n" +
        "      id=\"{{form.key.slice(-1)[0]}}\"\n" +
        "      class=\"form-control\"\n" +
        "      ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "      schema-validate=\"form\"\n" +
        "      style=\"cursor:pointer;\">\n" +
        "		<span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\">&nbsp;{{\n" +
        "			(form.required ?\n" +
        "			\"Required \" : \"\")\n" +
        "			+ (form.type ?\n" +
        "			(form.type | initcap) : \"Text\")\n" +
        "			+ (form.minlength ?\n" +
        "			\" Min: \" + form.minlength : \"\")\n" +
        "			+ (form.maxlength ?\n" +
        "			\" Max: \" + form.maxlength : \"\")\n" +
        "			}}&nbsp;\n" +
        "		</span>\n" +
        "    <a ng-hide=\"form.readonly\" tabindex=\"-1\" href=\"\" style=\"position:absolute;top:3px;right:15px;padding:7px 9px 6px;\">\n" +
        "      <i class=\"fa fa-caret-down color-theme\"></i>\n" +
        "    </a>\n" +
        "    <input\n" +
        "      type=\"hidden\"\n" +
        "      sf-field-model=\"replaceAll\"\n" +
        "      ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "      ng-model=\"$$value$$\" />\n" +
        "    <div class=\"ub-pop-head\" ng-click=\"form.hidePopup($event)\">\n" +
        "      <div><h4>{{:: ('CHOOSE'|translate) + ' ' + (form.title|translate) }}<span class=\"close\">×</span></h4></div>\n" +
        "    </div>\n" +
        "    <div class=\"ub-pop-filter\" ng-show=\"form.filterText\">\n" +
        "      <span class=\"bg-tint-theme\">{{form.filterText}}</span>\n" +
        "    </div>\n" +
        "    <div class=\"ub-pop\">\n" +
        "      <script type=\"text/ng-template\" id=\"ub_tree_renderer.html\">\n" +
        "        <div class=\"ub-pop-entry\" tabindex=\"0\" ng-class=\"{'bg-theme':branch.value==$$value$$}\">\n" +
        "          <i class=\"fa color-theme fa-caret-right\" ng-show=\"branch.children.length\"\n" +
        "            ng-class=\"{'rotate-45':!branch._hiddenChildren, 'text-white':branch.value==$$value$$}\"\n" +
        "            ng-click=\"branch._hiddenChildren = !branch._hiddenChildren\"></i>\n" +
        "          <i class=\"leaf\" ng-hide=\"branch.children.length\">-</i>\n" +
        "          <span ng-click=\"(($$value$$ = branch.value) || true); evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event}); form.hidePopup($event)\" ng-bind-html=\"branch.nameHtml || branch.name\"></span>\n" +
        "        </div>\n" +
        "        <ul class=\"ub-pop-ul\" ng-hide=\"branch._hiddenChildren\">\n" +
        "          <li ng-repeat=\"branch in branch.children\" ng-include=\"'ub_tree_renderer.html'\"></li>\n" +
        "        </ul>\n" +
        "      </script>\n" +
        "      <div class=\"ub-pop-content\">\n" +
        "        <ul class=\"ub-pop-ul-root\">\n" +
        "          <li ng-repeat=\"branch in form.userBranchFilteredTree\" ng-include=\"'ub_tree_renderer.html'\"></li>\n" +
        "        </ul>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/adminlte/validate-biometric.html","<div class=\"form-group form-with-hidden\" ng-form name=\"SingleInputForm\">\n" +
        "	<label for=\"{{::id}}\"\n" +
        "        ng-class=\"{'sr-only': !showTitle(), 'required':form.required&&!form.readonly}\"\n" +
        "		class=\"col-sm-4 control-label\">{{:: form.title | translate }}</label>\n" +
        "	<div class=\"col-sm-{{form.notitle ? '12' : '8'}}\">\n" +
        "		<input\n" +
        "			type=\"hidden\"\n" +
        "			sf-field-model=\"replaceAll\"\n" +
        "			ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:$$value$$, event:$event})\"\n" +
        "			schema-validate=\"form\"\n" +
        "			ng-model=\"$$value$$\" />\n" +
        "		<irf-validate-biometric irf-form=\"form\" irf-model=\"model\" irf-model-value=\"$$value$$\"></irf-validate-biometric>\n" +
        "		<span ng-if=\"SingleInputForm.$dirty && SingleInputForm.$invalid\" sf-message=\"form.description\" class=\"htmlerror\"></span>\n" +
        "	</div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/commons/SimpleModal.html","<div class=\"modal-header\" ng-style=\"{'border-bottom':(model.$showLoader?'none':''), 'margin-bottom':(model.$showLoader?'0':'1px')}\">\n" +
        "  <button type=\"button\" class=\"close\" ng-click=\"$close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "  <h4 class=\"modal-title\" sg-bind-html=\"title\"></h4>\n" +
        "</div>\n" +
        "<div ng-if=\"model.$showLoader\" class=\"loader-bar\"></div>\n" +
        "<div class=\"modal-body form-horizontal\" sg-bind-html=\"body\"></div>\n" +
        "<div class=\"modal-footer\">\n" +
        "  <button type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$dismiss()\">Close</button>\n" +
        "</div>")
    
    $templateCache.put("irf/template/dataTableLite/data-table-lite.html","<div>\n" +
        "    <div ng-if=\"options.columns\">\n" +
        "        <input type=\"file\" style=\"width: 0.1px; height: 0.1px; opacity: 0; overflow: hidden; position: absolute;z-index: -1;\" />\n" +
        "        <div class=\"pdt-grid\">\n" +
        "        <dtable options=\"options\" rows=\"irfModel\" keyvalue=\"irfkeyvalue\" can-add-row=\"canAddRow\" test=\"mode\"  class=\"material cdt-table\"></dtable>\n" +
        "        </div>\n" +
        "\n" +
        "        <div ng-if=\"isStaticTable\" class=\"btn-grid\"><button class= \"btn btn-theme btn-default \" type=\"button\" ng-click=\"addRow()\"><i class=\"fa fa-plus\" >&nbsp</i> {{irfkeyvalue | translate}} </button></div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/geotag/geotag.html","<div ng-if=\"!error.message\" class=\"geotag-fallback-image\">\n" +
        "	<div style=\"height:120px\" ng-style=\"{background: position.geoimageurl ? 'url(\\'' + position.geoimageurl + '\\') no-repeat center' : ''}\"></div>\n" +
        "</div>\n" +
        "<span>\n" +
        "	<i class=\"fa fa-map-marker color-theme\"></i>&nbsp;\n" +
        "	<a href=\"\" ng-href=\"{{ position.geourl }}\" target=\"_blank\" ng-style=\"{color:error.message?'tomato':'inherit'}\">\n" +
        "		{{ (position.geolocation || error.message) | translate }}\n" +
        "	</a>\n" +
        "	<a ng-hide=\"readOnly\" class=\"pull-right\" ng-click=\"refreshLocation()\" href=\"\">\n" +
        "		<i class=\"fa fa-refresh\" style=\"color:#ccc\"></i>\n" +
        "	</a>\n" +
        "</span>")
    
    $templateCache.put("irf/template/flipswitch/flipswitch.html","<label class=\"switch switch-flat {{sgDisabled ? 'switch-flat-disabled' : 'switch-flat-theme'}}\">\n" +
        "  <input class=\"switch-input\" type=\"checkbox\" ng-model=\"sgModel\" ng-disabled=\"sgDisabled\" />\n" +
        "  <span class=\"switch-label\" data-on=\"{{(before || 'ON')|translate}}\" data-off=\"{{(after || 'OFF')|translate}}\"></span> \n" +
        "  <span class=\"switch-handle\"></span> \n" +
        "</label>")
    
    $templateCache.put("irf/template/dashboardBox/dashboard-box.html","<div class=\"col-md-12 dashboard-box\">\n" +
        "  <div class=\"box box-theme no-border\">\n" +
        "    <div class=\"box-header\">\n" +
        "      <h3 class=\"box-title\" ng-if=\"!menu.parentMenu\">\n" +
        "        <i class=\"{{ menu.iconClass }}\" ng-if=\"menu.iconClass\" style=\"color:#666\"> </i>\n" +
        "        {{ menu.title | translate }}\n" +
        "      </h3>\n" +
        "      <h3 class=\"box-title\" ng-if=\"menu.parentMenu\" ng-click=\"loadPage($event, menu.parentMenu)\" style=\"cursor:pointer\">\n" +
        "        <i class=\"fa fa-arrow-left\" style=\"color:#97a0b3\">&nbsp;&nbsp;</i>\n" +
        "        <i class=\"{{ menu.iconClass }}\" ng-if=\"menu.iconClass\" style=\"color:#666\"> </i>\n" +
        "        {{ menu.title | translate }}\n" +
        "      </h3>\n" +
        "      <div class=\"box-tools pull-right\">\n" +
        "        <button ng-if=\"!menu.parentMenu\" type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-chevron-down\"></i></button>\n" +
        "        <button ng-if=\"menu.parentMenu\" type=\"button\" class=\"btn btn-box-tool\" ng-click=\"loadPage($event, menu.parentMenu)\"><i class=\"fa fa-times\"></i></button>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    <div class=\"box-body\">\n" +
        "      <div class=\"row\">\n" +
        "        <div class=\"col-xs-4 col-sm-2\" ng-repeat=\"dItem in dashboardItems\">\n" +
        "        <div class=\"small-box bg-theme\" style=\"cursor:pointer;\" ng-style=\"{'background-color':(dItem.data || dItem.data===0)?getBgColor(dItem.data):''}\">\n" +
        "          <div class=\"inner\" ng-click=\"loadPage($event, dItem)\">\n" +
        "            <h3 ng-if=\"dItem.data || dItem.data===0\" ng-class=\"{offline:dItem.offline}\">{{ dItem.data }}</h3>\n" +
        "            <h3 ng-if=\"!dItem.data && dItem.data!==0\" ng-class=\"{offline:dItem.offline}\"><i class=\"{{ dItem.iconClass || 'fa fa-tasks' }}\"></i></h3>\n" +
        "            <p>{{ (dItem.shortTitle || dItem.title) | translate }}</p>\n" +
        "          </div>\n" +
        "          <div class=\"icon\" ng-click=\"loadPage($event, dItem)\"><i class=\"{{ dItem.iconClass || 'fa fa-tasks' }}\"></i></div>\n" +
        "          <a ng-if=\"dItem.offlineMenu\" href=\"#\" class=\"small-box-footer\" ng-click=\"loadOfflinePage($event, dItem)\">Offline <i class=\"fa fa-save\"></i></a>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/inputFile/input-camera.html","<div>\n" +
        "    <div class=\"modal-dialog\" style=\"margin-left:0;margin-right:0\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <div class=\"modal-header\"\n" +
        "                ng-style=\"{'border-bottom':(showLoader?'none':''), 'margin-bottom':(showLoader?'0':'1px')}\">\n" +
        "                <button type=\"button\" ng-disabled=\"showLoader\" class=\"close\" ng-click=\"$close()\"\n" +
        "                    aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "                <h4 class=\"modal-title\">{{ 'WEBCAM' | translate }} - {{ form.title | translate }}</h4>\n" +
        "            </div>\n" +
        "            <div class=\"modal-body text-center\">\n" +
        "              <div class=\"row\">\n" +
        "                <div class=\"col-sm-6\">\n" +
        "                  <video id=\"webCamVideo\" style=\"width:100%;\">Video stream not available.</video>\n" +
        "                  <button id=\"startbutton\" ng-click=\"takePicture($event)\">Take photo</button>\n" +
        "                </div>\n" +
        "                <div class=\"col-sm-6\" ng-show=\"showWebCamPhoto\">\n" +
        "                  <img id=\"webCamPhoto\" style=\"width:100%;\" alt=\"The screen capture will appear in this box.\">\n" +
        "                  <button ng-click=\"resetWebCamPicture($event)\" style=\"margin-top:5px\">Cancel</button>\n" +
        "                  <button ng-click=\"confirmPicture($event)\" style=\"margin-top:5px\">Confirm</button>\n" +
        "                  <canvas id=\"webCamCanvas\" class=\"ng-hide\"></canvas>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/inputFile/input-file.html","<div  class=\"form-control\" \n" +
        "      ng-class=\"{'read-only':form.readonly}\" \n" +
        "      ng-style=\"(isImage || inputFileDataURL) ? {height:'inherit'}:{}\"\n" +
        "      style=\"position:relative;\">\n" +
        "  <div ng-if=\"isImage\" class=\"row\" style=\"padding-bottom:7px;\">\n" +
        "    <div class=\"col-xs-12\" style=\"text-align:center;height:200px;overflow:hidden\">\n" +
        "      <img ng-if=\"inputImageDataURL\" ng-src=\"{{ inputImageDataURL }}\" src=\"\" height=\"200\" style=\"height:200px;max-width:100%\" ng-click=\"lightbox($event, inputImageDataURL)\" />\n" +
        "      <div ng-if=\"!inputImageDataURL\" style=\"position: relative; top: 50%; transform: translateY(-50%);\">\n" +
        "        <div style=\"position:absolute;left:50%;top:-75px;\">\n" +
        "          <svg style=\"position:relative;left:-45%;width:140px;height:140px;lady\" viewBox=\"0 0 50 50\"><rect fill=\"none\" height=\"50\" width=\"50\"/><path style=\"fill:#ededed;\" d=\"M30.933,32.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701  c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133  c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006  c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25  C19.367,37.238,7.546,35.916,7,45h38C44.455,35.916,32.685,37.238,30.933,32.528z\"/></svg>\n" +
        "        </div>\n" +
        "        <div style=\"position:absolute;left:50%;top:-75px;\">\n" +
        "          <svg style=\"position:relative;left:-55%;width:150px;height:150px;\" viewBox=\"0 0 50 50\"><rect fill=\"none\" height=\"50\" width=\"50\"/><path style=\"fill:#ededed;stroke:#fff\" d=\"M30.933,32.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z\"/></svg>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-if=\"!isImage && form.preview\" class=\"row\" style=\"padding-bottom:7px;\">\n" +
        "    <div class=\"col-xs-12\" style=\"text-align:center;height:179px;overflow:hidden\">\n" +
        "      <img ng-if=\"form.preview=='pdf'\" src=\"img/irf-elements/pdf.png\" height=\"200\" style=\"height:179px;max-width:100%\"/>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-hide=\"form.readonly\" class=\"row\" style=\"height:21px\">\n" +
        "    <div ng-if=\"!(modelValue || inputFileName) && isImage\" class=\"col-xs-12\" style=\"text-align:center\">\n" +
        "      <button ng-if=\"isCordova && form.showCamera.includes('mobile')\" ng-click=\"startImageUpload($event, 'camera')\" class=\"btn btn-theme btn-xs\" style=\"margin-top:-3px;margin-left:-7px\"><i class=\"fa fa-camera\">&nbsp;</i>{{ 'CAMERA' | translate }}&nbsp;</button>\n" +
        "      <button ng-if=\"!isCordova && form.showCamera.includes('web')\" ng-click=\"startImageUpload($event, 'webcam')\" class=\"btn btn-theme btn-xs\" style=\"margin-top:-3px;margin-left:-7px\"><i class=\"fa fa-camera\">&nbsp;</i>{{ 'CAMERA' | translate }}&nbsp;</button>\n" +
        "      <button ng-if=\"isCordova && form.showGallery.includes('mobile') || !isCordova && form.showGallery.includes('web')\" ng-click=\"startImageUpload($event, 'gallery')\" class=\"btn btn-theme btn-xs\" style=\"margin-top:-3px;margin-left:0\"><i class=\"fa fa-image\">&nbsp;</i>{{ 'GALLERY' | translate }}</button>\n" +
        "    </div>\n" +
        "    <div ng-if=\"!(modelValue || inputFileName) && !isImage\" class=\"col-xs-12\">\n" +
        "      <button ng-click=\"startFileUpload($event)\" class=\"btn btn-theme btn-xs\" style=\"margin-top:-3px;margin-left:-7px\"><i class=\"fa fa-file\">&nbsp;</i>{{ 'CHOOSE_FILE' | translate}}</button>\n" +
        "    </div>\n" +
        "    <div ng-if=\"modelValue || inputFileName\" ng-class=\"{'col-xs-7':showUploadProgress,'col-xs-10':!showUploadProgress}\" style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">\n" +
        "      <span ng-if=\"!fileError\">\n" +
        "        <span ng-if=\"!isCordova\">\n" +
        "        <a ng-show=\"modelValue && modelValue!='$$OFFLINE_FILE$$' && inputFileDataURL\" href=\"\" ng-click=\"viewFile($event, inputFileDataURL)\" class=\"color-theme\">{{'VIEW'|translate}}</a>\n" +
        "        | </span>\n" +
        "        <a ng-show=\"modelValue && modelValue!='$$OFFLINE_FILE$$' && inputFileDataURL\" href=\"\" ng-click=\"downloadFile($event, inputFileDataURL)\" class=\"color-theme\">\n" +
        "          {{'DOWNLOAD'|translate}}\n" +
        "        </a>\n" +
        "        <span ng-hide=\"modelValue && modelValue!='$$OFFLINE_FILE$$'\" ng-bind=\"inputFileName\"></span>\n" +
        "      </span>\n" +
        "      <span ng-if=\"fileError\" style=\"color:tomato\"><i class=\"fa fa-exclamation-circle\">&nbsp;</i>{{ fileError }}</span>\n" +
        "    </div>\n" +
        "    <button ng-if=\"modelValue || inputFileName\" ng-click=\"removeUpload($event)\" class=\"btn btn-box-tool btn-xs pull-right\" style=\"padding-top:0;padding-right:10px\"><i class=\"fa fa-times\"></i></button>\n" +
        "    <div ng-if=\"showUploadProgress\" class=\"col-xs-3 pull-right\">\n" +
        "      <div class=\"progress\" style=\"margin-bottom:0\">\n" +
        "        <div class=\"progress-bar progress-bar-theme\" role=\"progressbar\" aria-valuenow=\"{{ uploadProgress }}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{ uploadProgress }}%\">\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-show=\"form.readonly && !isImage\">\n" +
        "    <div class=\"col-xs-12\" ng-style=\"form.preview?({'text-align':'center'}):({})\" style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left: 0\">\n" +
        "      <span ng-if=\"!isCordova\">\n" +
        "      <a ng-show=\"modelValue && modelValue!='$$OFFLINE_FILE$$' && inputFileDataURL\" href=\"\" ng-click=\"viewFile($event, inputFileDataURL)\" class=\"color-theme\">{{'VIEW'|translate}}</a>\n" +
        "      | </span>\n" +
        "      <a ng-show=\"modelValue && modelValue!='$$OFFLINE_FILE$$' && inputFileDataURL\" href=\"\" ng-click=\"downloadFile($event, inputFileDataURL)\" class=\"color-theme\">\n" +
        "        {{'DOWNLOAD'|translate}}\n" +
        "      </a>\n" +
        "      <span ng-show=\"fileError\" style=\"color:tomato\"><i class=\"fa fa-exclamation-circle\">&nbsp;</i>{{ fileError }}</span>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <input type=\"hidden\" autofocus=\"true\" />\n" +
        "  <input type=\"file\" id=\"{{'input_' + form.key.join('$')}}\" style=\"width: 0.1px;height: 0.1px;opacity: 0;overflow: hidden;position: absolute;z-index: -1;\" />\n" +
        "</div>")
    
    $templateCache.put("irf/template/calculator/calculator.html","<div class=\"calculator-body\">\n" +
        "    <div class=\"close-calculator\" >\n" +
        "        <button type=\"button\" class=\"close\" ng-click=\"$close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "    </div>\n" +
        "    <div class=\"display\">\n" +
        "        <div class=\"display-inner\">\n" +
        "            <!-- <input type=\"text\" ng-model=\"outputDisplay\" readonly class=\"display-expr\"></input> -->\n" +
        "            <div class=\"display-expr\">{{outputDisplay}}</div>\n" +
        "        </div>\n" +
        "        <div class=\"display-inner display-result\">{{result ? (\"= \" + result) : ''}}</div>\n" +
        "    </div>\n" +
        "    <div class=\"btn-box\">\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc calc-action btn-default\" ng-click='display(\"c\")'> C </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-6 nopadding\">\n" +
        "                <button class=\"btn btn-calc calc-action btn-default\" ng-click='display(\"<\")'> &larr; </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"/\")'> / </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"7\")'> 7 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"8\")'> 8 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"9\")'> 9 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"+\")'> + </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"4\")'> 4 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"5\")'> 5 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"6\")'> 6 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"-\")'> - </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"1\")'> 1 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"2\")'> 2 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"3\")'> 3 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"*\")'> * </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\"0\")'> 0 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                <button class=\"btn btn-calc btn-default\" ng-click='display(\".\")'> . </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-6 nopadding\">\n" +
        "                <button class=\"btn btn-calc calc-action btn-default\" ng-click='display(\"=\")'> &#x21B5; </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/calculator/credit-debit-calculator.html","<div class=\"calculator-body\">\n" +
        "    <div class=\"close-calculator\">\n" +
        "        <button type=\"button\" class=\"close\" ng-click=\"$close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "    </div>\n" +
        "    <div class=\"display\">\n" +
        "        <div class=\"credit-debit-display table-responsive\">\n" +
        "            <table class=\"table table-bordered\" id='fixed-table'>\n" +
        "                <thead>\n" +
        "                    <tr>\n" +
        "                        <th class=\"col-xs-6\">Debit (<span class=\"\" ng-bind-html=\"iconHtml\"></span>)</th>\n" +
        "                        <th class=\"col-xs-6\">Credit (<span class=\"\" ng-bind-html=\"iconHtml\"></span>)</th>\n" +
        "                    </tr>\n" +
        "                </thead>\n" +
        "                <tbody>\n" +
        "                    <tr ng-repeat = 'data in creditDebitData' ng-click = 'setSelectedItem($index)' >\n" +
        "                        <td class=\"col-xs-6 nopadding\" ng-class = \"{'bg-primary': selectedIndex == $index}\">\n" +
        "                            <span ng-class = \"{'cell-hidden': data.amtType == 1}\">{{data.amtType == 0 ? (data.value | irfCurrency:null:null:\"decimal\":null:null:\"\") : data.value }}</span>\n" +
        "                        </td>\n" +
        "                        <td class=\"col-xs-6 nopadding\" ng-class = \"{'bg-primary': selectedIndex == $index}\">\n" +
        "                            <span ng-class = \"{'cell-hidden': data.amtType == 0}\">{{data.amtType == 1 ? (data.value | irfCurrency:null:null:\"decimal\":null:null:\"\" ) : data.value }}</span>\n" +
        "                        </td>\n" +
        "                    </tr>                    \n" +
        "                </tbody>\n" +
        "            </table>\n" +
        "        </div>\n" +
        "        <div class=\"display-inner display-result credit-debit-total\" ng-show=\"(creditDebitData.length > 0)\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-xs-6\">\n" +
        "                    Total Debit: <span class=\"\" ng-bind-html=\"\"></span>&nbsp;{{totalDebit | irfCurrency}}\n" +
        "                </div>\n" +
        "                <div class=\"col-xs-6\">\n" +
        "                    Total Credit: <span class=\"\" ng-bind-html=\"\"></span>&nbsp;{{totalCredit | irfCurrency}}\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-xs-12\">\n" +
        "                    Sum: <span class=\"\" ng-bind-html=\"\"></span>&nbsp;{{totalAmt | irfCurrency}}\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"display-inner\">\n" +
        "            <input type=\"text\" ng-model=\"outputDisplay\" readonly class=\"display-expr\"/>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"credit-debit-btn\">\n" +
        "        <div class=\"btn-group\">\n" +
        "            <label class=\"btn btn-default\" ng-class= \"{'active btn-primary': amtType == 0}\">\n" +
        "                <input type=\"radio\" ng-model=\"amtType\" value=\"0\" name=\"options\" id=\"option1\" autocomplete=\"off\"> Debit\n" +
        "            </label>\n" +
        "            <label class=\"btn btn-default\" ng-class= \"{'active btn-primary': amtType == 1}\">\n" +
        "                <input type=\"radio\" ng-model=\"amtType\" value='1' name=\"options\" id=\"option2\" autocomplete=\"off\"> Credit\n" +
        "            </label>\n" +
        "            <br/>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "\n" +
        "    <div class=\"btn-box\">\n" +
        "\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"1\")'> 1 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"4\")'> 4 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"7\")'> 7 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"2\")'> 2 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"5\")'> 5 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"8\")'> 8 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"3\")'> 3 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"6\")'> 6 </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"9\")'> 9 </button>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\" >\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-default\" ng-click='addToTable()'> ADD </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-default\" ng-click=\"removeFromTable()\" ng-disabled = \"(selectedIndex == -1)\">\n" +
        "                    DELETE\n" +
        "                </button>\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-default\" ng-click=\"editFromTable()\" ng-disabled = \"(selectedIndex == -1)\">\n" +
        "                    EDIT\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\"0\")'> 0 </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-default\" ng-click='display(\".\")'> . </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-default\" ng-click='display(\"<\")'> &larr; </button>\n" +
        "            </div>\n" +
        "            <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-default\" ng-click='display(\"c\")'> C </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"col-xs-12 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc calc-action btn-theme\" ng-click='done()'> DONE </button>\n" +
        "            </div>\n" +
        "<!--             <div class=\"col-xs-3 nopadding\">\n" +
        "                 <button type=\"button\" class=\"btn btn-calc btn-info\" style=\"font-size:25px;\" ng-click='displaySum()'> &#x21B5;</button>\n" +
        "            </div> -->\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/listView/list-view-item.html","<ng-switch on=\"listStyle\">\n" +
        "<div ng-switch-default class=\"list-view list-group-item perdix-priority{{listStyleConfig._priority}}\" ng-class=\"{'expanded':expanded}\" ng-attr-style=\"{{getItemStyle()}}\">\n" +
        "        <div class=\"list-group-item-body\" \n" +
        "            ng-click=\"expandable ? expand($event) : cb({item:actualItem,index:itemIndex})\">\n" +
        "            <h4 class=\"list-group-item-heading\" sg-bind-html=\"item[0]\" ng-style=\"{'padding-left':selectable?'22px':''}\">&nbsp;</h4>\n" +
        "            <p ng-if=\"item.length > 1\" sg-bind-html=\"item[1]\" class=\"list-group-item-text gray\">&nbsp;</p>\n" +
        "            <p ng-if=\"item.length > 2\" sg-bind-html=\"item[2]\" class=\"list-group-item-text smaller\">&nbsp;</p>\n" +
        "            <p ng-show=\"expanded\" ng-repeat=\"expandItem in expandItems track by $index\" sg-bind-html=\"expandItem\" class=\"list-group-item-text smaller\">&nbsp;</p>\n" +
        "        </div>\n" +
        "        <div class=\"checkbox\" ng-if=\"selectable\" ng-click=\"actualItem.$selected = !actualItem.$selected\">\n" +
        "            <label class=\"checkbox-inline checkbox-theme\">\n" +
        "                <input type=\"checkbox\"\n" +
        "                       ng-model=\"actualItem.$selected\">\n" +
        "                <span class=\"control-indicator\"></span>\n" +
        "            </label>\n" +
        "        </div>\n" +
        "        <div class=\"list-context-menu\" ng-if=\"actions.length\">\n" +
        "            <div class=\"dropdown irf-action-dropdown\">\n" +
        "                <button class=\"btn btn-lv-item-tool dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" type=\"button\" ng-click=\"c.toggleActionBox()\">\n" +
        "                    <i class=\"glyphicon glyphicon-option-vertical\"></i>\n" +
        "                </button>\n" +
        "                <ul class=\"dropdown-menu dropdown-menu-right irf-action-dropdown-menu bg-tint-theme\" aria-labelledby=\"dropdownMenu1\">\n" +
        "                    <li ng-repeat=\"action in actions track by $index\" ng-if=\"action.isApplicable(actualItem, irfModel)\">\n" +
        "                        <a href=\"\" ng-click=\"action.fn(actualItem, irfModel);\">\n" +
        "                            <i ng-if=\"action.icon\" class=\"{{action.icon}}\"></i>\n" +
        "                            {{ action.name | translate }}\n" +
        "                        </a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div ng-switch-when=\"simple\" class=\"list-view-simple list-group-item\"\n" +
        "        ng-click=\"actualItem.$selected=!!!actualItem.$selected\">\n" +
        "        <h4 class=\"list-group-item-heading\" ng-bind-html=\"item[0]\">&nbsp;</h4>\n" +
        "        <p ng-if=\"item.length > 1\" ng-bind-html=\"item[1]\" class=\"list-group-item-text smaller\">&nbsp;</p>\n" +
        "        <div class=\"checkbox-simple color-theme\" ng-if=\"selectable && actualItem.$selected\">\n" +
        "            <i class=\"fa fa-check\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"dropdown-simple\" ng-if=\"actions.length && !selectable\">\n" +
        "            <button class=\"btn btn-lv-item-tool dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" type=\"button\" ng-click=\"c.toggleActionBox()\">\n" +
        "                <i class=\"glyphicon glyphicon-option-vertical\"></i>\n" +
        "            </button>\n" +
        "            <ul class=\"dropdown-menu dropdown-menu-right irf-action-dropdown-menu bg-tint-theme\" aria-labelledby=\"dropdownMenu1\">\n" +
        "                <li ng-repeat=\"action in actions\" ng-if=\"action.isApplicable(actualItem, irfModel)\">\n" +
        "                    <a href=\"\" ng-click=\"action.fn(actualItem, irfModel);\">\n" +
        "                        <i ng-if=\"action.icon\" class=\"{{action.icon}}\"></i>\n" +
        "                        {{ action.name | translate }}\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</ng-switch>")
    
    $templateCache.put("irf/template/listView/list-view-rest-wrapper.html","<div>\n" +
        "    <div ng-show=\"isAvailable && listViewDefn\">\n" +
        "        <h4 class=\"box-title box-title-theme\" style=\"text-align:center; margin: 20px 5px 10px\">\n" +
        "          <span class=\"text\" style=\"padding: 0 5px;\">{{ 'Results' | translate }}</span>\n" +
        "        </h4>\n" +
        "        <div ng-show=\"!isLoading\">\n" +
        "            <irf-list-view list-style=\"basic\" list-info=\"listViewDefn\" irf-list-items=\"listViewItems\" irf-list-actual-items=\"items\"></irf-list-view>\n" +
        "        </div>\n" +
        "        <div ng-show=\"isLoading\" style=\"text-align: center\">\n" +
        "            <irf-preloader></irf-preloader>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div ng-show=\"isAvailable && listViewItems.length\" class=\"row\">\n" +
        "        <div class=\"col-xs-12\">\n" +
        "            <div ng-if=\"paginationOpts.is_any_page_url_builder_available && paginationOpts.total_items!=null && paginationOpts.items_per_page!=null\" class=\"paginatelte\">\n" +
        "                <uib-pagination ng-model=\"page.currentPage\" ng-change=\"c.pageChanged()\" boundary-links=\"true\" total-items=\"paginationOpts.total_items\" rotate=\"true\" max-size=\"5\" force-ellipsis=\"true\" class=\"pagination-sm\" force-ellipses=\"true\" items-per-page=\"paginationOpts.items_per_page\"></uib-pagination>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-xs-12\">\n" +
        "            <div class=\"paginate-info\" ng-if=\"page.totalItemsCount\">\n" +
        "                {{ 'Showing' | translate }} \n" +
        "                {{ page.currentPage * page.itemsPerPage - page.itemsPerPage + 1 }} to \n" +
        "                {{ (page.currentPage * page.itemsPerPage) > page.totalItemsCount ? page.totalItemsCount : page.currentPage * page.itemsPerPage }} of \n" +
        "                {{ page.totalItemsCount }} {{ 'entries' | translate }}\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div ng-show=\"isAvailable && !listViewItems.length\" class=\"row\">\n" +
        "        <div class=\"col-xs-12\">\n" +
        "            <div class=\"alert\" style=\"padding:0 15px;\">\n" +
        "                <h5><i class=\"icon fa fa-warning\"></i> {{ 'No results found' | translate }}</h5>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "<style type=\"text/css\">\n" +
        ".paginate-info {\n" +
        "    padding-top: 6px;\n" +
        "    text-align: center;\n" +
        "}\n" +
        ".paginatelte {\n" +
        "    margin: 0;\n" +
        "    white-space: nowrap;\n" +
        "    text-align: center;\n" +
        "}\n" +
        ".paginatelte ul.pagination {\n" +
        "    margin: 2px 0 !important;\n" +
        "    white-space: nowrap;\n" +
        "}\n" +
        "</style>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/listView/list-view.html","<div class=\"irf-list-view-wrapper\">\n" +
        "    <div class=\"list-group\">\n" +
        "        <irf-list-view-item ng-repeat=\"item in listItems\"\n" +
        "            list-style=\"listInfo.listStyle\"\n" +
        "        	callback=\"callback(item)\"\n" +
        "            list-item=\"item\"\n" +
        "            list-style-config=\"listStyleConfig[$index]\"\n" +
        "        	list-item-index=\"$index\"\n" +
        "        	list-actual-item=\"listActualItems[$index]\"\n" +
        "        	list-actions=\"listInfo.actions\"\n" +
        "        	selectable=\"listInfo.selectable\"\n" +
        "            expandable=\"listInfo.expandable\"\n" +
        "            irf-model=\"listInfo.model\"\n" +
        "        ></irf-list-view-item>\n" +
        "    </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/lov/modal-lov.html","<div class=\"lov\">\n" +
        "  <div class=\"modal-dialog\" style=\"margin-left:0;margin-right:0\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <div class=\"modal-header\" ng-style=\"{'border-bottom':(showLoader?'none':''), 'margin-bottom':(showLoader?'0':'1px')}\">\n" +
        "        <button type=\"button\" class=\"close\" ng-click=\"$close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "        <h4 class=\"modal-title\">{{ 'Pick' | translate }} - {{ form.title | translate }}</h4>\n" +
        "      </div>\n" +
        "      <div ng-if=\"showLoader\" class=\"loader-bar\"></div>\n" +
        "      <div class=\"modal-body form-horizontal\">\n" +
        "        <irf-sf\n" +
        "          ng-if=\"inputForm.length\"\n" +
        "          irf-form-name=\"formName\"\n" +
        "          irf-schema=\"inputSchema\"\n" +
        "          irf-form=\"inputForm\"\n" +
        "          irf-actions=\"inputActions\"\n" +
        "          irf-model=\"inputModel\"\n" +
        "          irf-helper=\"inputFormHelper\"\n" +
        "        ></irf-sf>\n" +
        "        <h4 ng-if=\"inputForm.length && listDisplayItems.length\" class=\"box-title box-title-theme\" style=\"text-align:center; margin: 20px 5px 10px\">\n" +
        "          <span class=\"text\" style=\"padding: 0 5px;\">{{ 'Results' | translate }}</span>\n" +
        "        </h4>\n" +
        "        <irf-list-view\n" +
        "          list-style=\"simple\"\n" +
        "          list-info=\"listViewOptions\"\n" +
        "          irf-list-items=\"listDisplayItems\"\n" +
        "          irf-list-actual-items=\"listResponseItems\"\n" +
        "          callback=\"callback(item)\"></irf-list-view>\n" +
        "          <span>{{noRecordError|translate}}</span>\n" +
        "          <uib-pagination\n" +
        "            ng-show=\"getTotalItems() > listDisplayItems.length\"\n" +
        "            ng-change=\"searchwraper()\"\n" +
        "            ng-model=\"pageOpts.pageNo\"\n" +
        "            boundary-links=\"true\"\n" +
        "            total-items=\"getTotalItems()\"\n" +
        "            rotate=\"true\"\n" +
        "            max-size=\"5\"\n" +
        "            force-ellipsis=\"true\"\n" +
        "            class=\"pagination-sm pagination-theme\"\n" +
        "            force-ellipses=\"true\"\n" +
        "            items-per-page=\"getItemsPerPage()\"></uib-pagination>\n" +
        "      </div>\n" +
        "      <div class=\"modal-footer\">\n" +
        "        <button type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$close()\">Close</button>\n" +
        "        <!-- <button type=\"button\" class=\"btn btn-theme\" ng-click=\"$close()\">Save changes</button> -->\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/progressMessage/progress-message-container.html","<div class=\"irf-p-m-c\" style=\"z-index:10000\">\n" +
        "    <irf-progress-message data-ng-repeat=\"msg in irfProgressMessages\" irf-progress-msg=\"msg\">\n" +
        "\n" +
        "    </irf-progress-message>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/progressMessage/progress-message.html","<div class=\"irf-pmc-pm\">\n" +
        "    <span class=\"a-wb-K-s\">\n" +
        "        <span class=\"a-wb-ra-s\">\n" +
        "            <div class=\"wb-x\">{{ msg.text }}</div>\n" +
        "        </span>\n" +
        "        <div>\n" +
        "            <button class=\"wb-ua-I a-wb-Uo-e a-wb-Uo-e-Oa\" ng-click=\"dismiss()\">\n" +
        "                <svg x=\"0px\" y=\"0px\" width=\"12px\" height=\"12px\" viewBox=\"0 0 10 10\" focusable=\"false\">\n" +
        "                    <polygon class=\"a-pa-wd-At1hV-Ff\" fill=\"#FFFFFF\"\n" +
        "                             points=\"10,1.01 8.99,0 5,3.99 1.01,0 0,1.01 3.99,5 0,8.99 1.01,10 5,6.01 8.99,10 10,8.99 6.01,5 \"></polygon>\n" +
        "                </svg>\n" +
        "            </button>\n" +
        "        </div>\n" +
        "    </span>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/mobile/mobile-modal.html","<div class=\"lov\">\n" +
        "    <div class=\"modal-dialog\" style=\"margin-left:0;margin-right:0\">\n" +
        "      <div class=\"modal-content\">\n" +
        "        <div class=\"modal-header\" ng-style=\"{'border-bottom':(showLoader?'none':''), 'margin-bottom':(showLoader?'0':'1px')}\">\n" +
        "          <button type=\"button\" ng-disabled=\"showLoader\" class=\"close\" ng-click=\"$parent.close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "          <h4 class=\"modal-title\">{{ 'VERIFY' | translate }} - {{ form.title | translate }}</h4>\n" +
        "        </div>\n" +
        "        <div ng-if=\"showLoader\" class=\"loader-bar\"></div>\n" +
        "        <div class=\"modal-body text-center\">\n" +
        "          <div ng-if=\"!validationError && !successMessage\">\n" +
        "          <div ng-if=\"!otpSent\">\n" +
        "            <div ng-if=\"error\">\n" +
        "              <span style=\"color: tomato\">{{error}}</span>\n" +
        "            </div> \n" +
        "            <div>\n" +
        "              <span>{{modelValue}}</span>\n" +
        "            </div>\n" +
        "            <button ng-if=\"!retryCount\" type=\"button\" ng-disabled=\"showLoader\" class=\"btn btn-default\" ng-click=\"$parent.generateOTP(modelValue)\">\n" +
        "                Generate OTP\n" +
        "            </button>\n" +
        "          </div>\n" +
        "          <div ng-if=\"otpSent && !retryCount\">\n" +
        "              <div class=\"form-group\" style=\"width: 50%;margin:10px auto;\">\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Please enter OTP\" ng-model=\"otpValue\"/>\n" +
        "                <span style=\"color: tomato\" ng-if=\"error\">\n" +
        "                  {{error}}\n" +
        "                </span>\n" +
        "              </div>\n" +
        "              <div class=\"form-group\">\n" +
        "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"showLoader\" ng-click=\"$parent.verifyOTP(otpValue)\">\n" +
        "                    Verify OTP\n" +
        "                </button>\n" +
        "                <button type=\"button\" ng-if=\"showResendBtn\" class=\"btn btn-primary\" ng-disabled=\"showLoader\" ng-click=\"$parent.generateOTP(modelValue)\">\n" +
        "                    Resend OTP\n" +
        "                </button>\n" +
        "              </div>\n" +
        "          </div>\n" +
        "          <div ng-if=\"retryCount\">\n" +
        "            <span style=\"color: tomato\">\n" +
        "              {{error}}\n" +
        "            </span>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div ng-if=\"validationError\">\n" +
        "            <span style=\"color: tomato\">\n" +
        "                {{validationError}}\n" +
        "              </span>\n" +
        "        </div>\n" +
        "        <div ng-if=\"generateOTPError\">\n" +
        "          <span style=\"color: tomato\">\n" +
        "            {{generateOTPError}}\n" +
        "          </span>\n" +
        "        </div>\n" +
        "        <div ng-if=\"resendCountInfo\">\n" +
        "          <span style=\"color: tomato\">\n" +
        "            {{resendCountInfo}}\n" +
        "          </span>\n" +
        "        </div>\n" +
        "        <div ng-if=\"successMessage\">\n" +
        "          <span style=\"color: green;\">{{successMessage}}</span>\n" +
        "        </div>\n" +
        "        </div>\n" +
        "        <div class=\"modal-footer\">\n" +
        "          <button type=\"button\" ng-disabled=\"showLoader\" class=\"btn btn-default pull-left\" ng-click=\"$parent.close()\">Close</button>\n" +
        "          <!-- <button type=\"button\" class=\"btn btn-theme\" ng-click=\"$close()\">Save changes</button> -->\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>")
    
    $templateCache.put("irf/template/mobile/mobile.html","    <div>\n" +
        "      <input\n" +
        "           sf-field-model\n" +
        "           ng-model=\"modelValue\"\n" +
        "           ng-model-options=\"{updateOn:'blur'}\"\n" +
        "           ng-disabled=\"form.readonly\"\n" +
        "           schema-validate=\"form\"\n" +
        "           type=\"{{:: form.inputmode && form.inputmode=='number'? (form.numberType)?form.numberType:'number' :false || form.fieldType || 'text' }}\"\n" +
        "           ng-attr-irf-to-number=\"{{ form.inputmode==='number' && form.numberType==='number' || undefined }}\"\n" +
        "           class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "           placeholder=\"{{form.placeholder|translate}}\"\n" +
        "           ng-change=\"onChange($event)\"\n" +
        "           ng-class=\"{'read-only':form.readonly}\"\n" +
        "           id=\"{{form.key.slice(-1)[0]}}\" />\n" +
        "\n" +
        "        <button\n" +
        "        ng-if=\"!verifiedValue && form.verification && commons.mobileVerificationEnabled\"\n" +
        "        type=\"button\"\n" +
        "        ng-click=\"requestOtp(modelValue)\"\n" +
        "        ng-disabled=\"showLoader\"\n" +
        "        class=\"btn btn-theme btn-xs\"\n" +
        "        style=\"position:absolute;bottom:5px;right:15px;\"\n" +
        "        >{{ (form.buttonText || 'VERIFY') | translate}}</button>\n" +
        "        <span ng-if=\"verifiedValue\"\n" +
        "          class=\"fa fa-check color-theme\"\n" +
        "          style=\"position: absolute;bottom: 5px;right: 20px;font-size: 20px;\"\n" +
        "        ></span>\n" +
        "        <span\n" +
        "            ng-if=\"!verifiedValue && !(form.verification && commons.mobileVerificationEnabled)\"\n" +
        "            class=\"fa fa-ban\"\n" +
        "            style=\"position: absolute;bottom: 5px;right: 20px;font-size: 20px; color:lightgrey;\">\n" +
        "        </span>\n" +
        "      </div>")
    
    $templateCache.put("irf/template/structuredfilter/irf-structured-filter.html","<div class = 'form-group row structured-filter' style=\"text-align : 'right';\">\n" +
        "	<div class = 'col-sm-4'>\n" +
        "		<select class = 'form-control' ng-model = 'filterParameter' ng-options=\"item.value as item.name for item in parameterMap\" ng-disabled = 'form.filterParamPreset && filterParameter' ng-change = 'parameterChanged()'>\n" +
        "		</select>\n" +
        "	</div>\n" +
        "	<div class = 'col-sm-4'> \n" +
        "		<select class = 'form-control' ng-required='required' schema-validate=\"form\" ng-change= 'operatorChanged()' ng-model = 'filterOperator' ng-options=\"item.value as item.name for item in operatorMap\">\n" +
        "		</select>\n" +
        "	</div>\n" +
        "	<div class = 'col-sm-4 flter-value' ng-if = 'filterOperator'>\n" +
        "		<div ng-switch on=\"filterValueType\">\n" +
        "			<select-filter ng-switch-when = \"select\">\n" +
        "				<!-- <select class = 'form-control' ui-select ui-select-multiple  ng-model = '$parent.filtervalue' ng-options=\"item.value as item.name for item in filteredTitleMap\">\n" +
        "				</select> -->\n" +
        "				<ui-select schema-validate=\"$parent.$parent.$parent.form\" ng-required = '$parent.$parent.$parent.required' ng-model='$parent.$parent.$parent.filtervalue' multiple on-select = \"onUiSelect()\">\n" +
        "					<ui-select-match placeholder=\"Pick one...\">{{$item.name}}</ui-select-match>\n" +
        "					<ui-select-choices repeat=\"item in filteredTitleMap| filter: $select.search track by item.value\" position = 'down'>\n" +
        "						<div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n" +
        "					</ui-select-choices>\n" +
        "				</ui-select>\n" +
        "			</select-filter>\n" +
        "			<date-filter ng-switch-when = \"date\" >\n" +
        "				<dummy ng-if = \"$parent.$parent.operandCount != 10\">\n" +
        "					<input class = 'form-control' ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\"  type=\"hidden\" ng-model = '$parent.$parent.$parent.filtervalue' irf-pikaday=\"form\"/>\n" +
        "					<input class=\"form-control\"  placeholder=\"DDMMYYYY\"/>\n" +
        "				</dummy>\n" +
        "				<dummy ng-if = \"$parent.$parent.operandCount == 10\">\n" +
        "					<textarea ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\"  class=\"form-control\" ng-model = '$parent.$parent.$parent.filtervalue' ng-model-options=\"{updateOn:'blur'}\">\n" +
        "					</textarea>\n" +
        "				</dummy>\n" +
        "			</date-filter>\n" +
        "			<list-filter ng-switch-when = \"list\">\n" +
        "				<dummy ng-if = \"$parent.$parent.operandCount == 10\">\n" +
        "					<textarea ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\"  class=\"form-control\" ng-model = '$parent.$parent.$parent.filtervalue' ng-model-options=\"{updateOn:'blur'}\">\n" +
        "					</textarea>\n" +
        "				</dummy>\n" +
        "				<dummy ng-if = \"$parent.$parent.operandCount != 10\">\n" +
        "				<input ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\" class = 'form-control' type=\"{{filterValueType}}\" ng-model = '$parent.$parent.$parent.filtervalue' ng-model-options=\"{updateOn:'blur'}\"/>\n" +
        "			</list-filter>\n" +
        "			<div ng-switch-when = \"form\">\n" +
        "					<div class=\"structured_custom_form\" ng-show=\"$parent.$parent.filterOperator == 'IN'\">\n" +
        "						<div ng-repeat=\"n in $parent.$parent.filterName track by $index\"><div class=\"structured_custom_form_item\"><i ng-click=\"$parent.$parent.$parent.customFormOnClose($index,model)\" style=\"float:'right'\" class='fa fa-close structured_custom_form_item_close'></i><span>{{n}}</span></div></div>\n" +
        "					</div>\n" +
        "					<irf-sf\n" +
        "					initialize=\"initialize(model, form, formCtrl)\"\n" +
        "					irf-schema=\"$parent.$parent.model.formSchema\"\n" +
        "					irf-form=\"$parent.$parent.formDef\"\n" +
        "					irf-actions=\"$parent.$parent.model.actions\"\n" +
        "					irf-model=\"$parent.$parent.model\"\n" +
        "					irf-helper=\"$parent.$parent.form.formHelper\"\n" +
        "					irf-form-name=\"$parent.$parent.model.formName\"\n" +
        "					class=\"page-form\"></irf-sf>\n" +
        "			</div>\n" +
        "			<input ng-switch-default ng-required='$parent.$parent.required' schema-validate=\"$parent.$parent.form\" class = 'form-control' type=\"{{filterValueType}}\" ng-model = '$parent.$parent.filtervalue' ng-model-options=\"{updateOn:'blur'}\"/>\n" +
        "		</div>\n" +
        "		<div ng-if = 'operandCount == 2' ng-switch on=\"filterValueType\">\n" +
        "			<!-- <select-filter ng-switch-when = \"select\">\n" +
        "				<select class = 'form-control' ui-select ui-select-multiple ng-model = '$parent.filtervalue2' ng-options=\"item.value as item.name for item in filteredTitleMap\">\n" +
        "				</select>\n" +
        "			</select-filter> -->\n" +
        "			<date-filter ng-switch-when = \"date\">\n" +
        "				<input class = 'form-control' ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\" type=\"hidden\" ng-model = '$parent.$parent.$parent.filtervalue2' irf-pikaday=\"form\"/>\n" +
        "				<input class=\"form-control\" placeholder=\"DDMMYYYY\"/>\n" +
        "			</date-filter>\n" +
        "<!-- 			<textarea ng-switch-when = \"list\" class=\"form-control\" ng-model = '$parent.$parent.$parent.filtervalue2' ng-model-options=\"{updateOn:'blur'}\">\n" +
        "			</textarea> -->\n" +
        "			<input ng-switch-default ng-required='$parent.$parent.$parent.required' schema-validate=\"$parent.$parent.$parent.form\" class = 'form-control' type=\"{{filterValueType}}\" ng-model = '$parent.$parent.$parent.filtervalue2' ng-model-options=\"{updateOn:'blur'}\"/>\n" +
        "		</div>\n" +
        "	</div>\n" +
        "</div>\n" +
        "\n" +
        "<style>\n" +
        "	.structured_custom_form{\n" +
        "		display: grid;\n" +
        "    	grid-row-gap: 0.1em;\n" +
        "    	max-height: 100px;\n" +
        "    	overflow-y: scroll\n" +
        "	}\n" +
        "	.structured_custom_form_item{\n" +
        "		border: 1px solid #dddddd;\n" +
        "		cursor: pointer;\n" +
        "    	text-align: center;\n" +
        "    	padding: 1px;\n" +
        "    	padding-right: 2px;\n" +
        "    	border-radius: 4px;\n" +
        "    	color: #444444;\n" +
        "    	background-color: #f4f4f4;\n" +
        "	}\n" +
        "	.structured_custom_form_item_close{\n" +
        "		padding-top: 3px;\n" +
        "		padding-right: 2px;\n" +
        "		float: right;\n" +
        "    	color: #c3c3c3;\n" +
        "	}\n" +
        "</style>")
    
    $templateCache.put("irf/template/searchListWrapper/modal-resource-queue.html","<div class=\"lov\">\n" +
        "  <div class=\"modal-dialog\" style=\"margin-left:0;margin-right:0\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <div class=\"modal-header\" ng-style=\"{'border-bottom':(showLoader?'none':''), 'margin-bottom':(showLoader?'0':'1px')}\">\n" +
        "        <button type=\"button\" class=\"close\" ng-click=\"$close()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n" +
        "        <h4 class=\"modal-title\">{{ queueDefinition.title | translate }}</h4>\n" +
        "      </div>\n" +
        "      <div ng-if=\"showLoader\" class=\"loader-bar\"></div>\n" +
        "      <div class=\"modal-body form-horizontal\" style=\"padding-top:10px\">\n" +
        "        <irf-resource-search-wrapper\n" +
        "          definition=\"queueDefinition\"\n" +
        "          modal-popup=\"modalPopup\"\n" +
        "          irf-model=\"model\"\n" +
        "        ></irf-resource-search-wrapper>\n" +
        "      </div>\n" +
        "      <div class=\"modal-footer\">\n" +
        "        <button type=\"button\" class=\"btn btn-theme\" ng-click=\"toggle = !toggle\"><span ng-bind-html=\"toggleIcon\"></span> {{ toggleText | translate }}</button>\n" +
        "\n" +
        "      </div>\n" +
        "      <div class=\"modal-footer\">\n" +
        "        <button type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$close()\">{{ 'CLOSE' | translate }}</button>\n" +
        "        <button type=\"button\" class=\"btn btn-theme\" ng-click=\"saveSelection()\">{{ 'SAVE_SELECTION' | translate }}</button>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div style=\"\"></div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/searchListWrapper/resource-search-wrapper.html","<div>\n" +
        "  <irf-sf\n" +
        "    ng-if=\"definition.searchForm.length\"\n" +
        "    initialize=\"initSF(model, form, formCtrl)\"\n" +
        "    irf-schema=\"definition.searchSchema\"\n" +
        "    irf-form=\"searchForm\"\n" +
        "    irf-actions=\"definition.actions\"\n" +
        "    irf-model=\"model.searchOptions\"\n" +
        "    irf-helper=\"formHelper\"\n" +
        "    irf-form-name=\"definition.formName\"></irf-sf>\n" +
        "\n" +
        "  <div ng-if=\"!modalPopup\" class=\"box-col\" ng-class=\"{'col-sm-12':listStyle==='table','col-sm-6':listStyle!=='table'}\">\n" +
        "    <div class=\"box box-theme\" id=\"{{pid}}\" ng-init=\"pid=definition.formName.split(' ').join('_')\">\n" +
        "      <div class=\"box-header with-border\" ng-init=\"id=pid+'_body'\" data-toggle=\"collapse\" data-target=\"#{{id}}\" data-parent=\"#{{pid}}\">\n" +
        "          <h3 class=\"box-title\">{{ 'RESULTS' | translate }} <small>{{ model.view == 'results-loaded' && getTotalItems() ? 'Showing ' + items.length + ' of ' + getTotalItems() + ' records':'' }}</small></h3>\n" +
        "          <!-- <div class=\"box-tools pull-right\">\n" +
        "              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\">\n" +
        "                  <i class=\"fa fa-chevron-down\"></i></button>\n" +
        "          </div> -->\n" +
        "      </div>\n" +
        "      <div ng-switch=\"model.view\" class=\"box-body collapse in\" id=\"{{id}}\">\n" +
        "        <div ng-switch-when=\"idle\">\n" +
        "            {{ 'SEARCH_HINT' | translate }}\n" +
        "        </div>\n" +
        "        <div ng-switch-when=\"results-loading\">\n" +
        "            {{ 'LOADING' | translate }}...\n" +
        "        </div>\n" +
        "        <div ng-switch-when=\"results-failed\">\n" +
        "            {{ 'SEARCH_FAILED' | translate }}...\n" +
        "        </div>\n" +
        "        <div ng-switch-when=\"results-loaded\" ng-show=\"!isLoading\" ng-if=\"actionsLoaded\">\n" +
        "          <irf-table-view ng-if=\"listStyle == 'table'\"\n" +
        "            table-options=\"listViewOptions\"\n" +
        "            table-data=\"items\"\n" +
        "          ></irf-table-view>\n" +
        "          <irf-list-view ng-if=\"listStyle != 'table'\"\n" +
        "            list-style=\"listStyle\"\n" +
        "            list-info=\"listViewOptions\"\n" +
        "            irf-list-items=\"listItems\"\n" +
        "            irf-list-style-config=\"listStyleConfig\"\n" +
        "            irf-list-actual-items=\"items\"\n" +
        "            callback=\"definition.listOptions.itemCallback(item, index)\"></irf-list-view>\n" +
        "          <uib-pagination\n" +
        "            ng-show=\"getTotalItems() > items.length && (listViewOptions.listStyle !== 'table' || listViewOptions.config.serverPaginate !== false)\"\n" +
        "            ng-change=\"loadResults()\"\n" +
        "            ng-model=\"pageInfo.currentPage\"\n" +
        "            boundary-links=\"true\"\n" +
        "            total-items=\"getTotalItems()\"\n" +
        "            rotate=\"true\"\n" +
        "            max-size=\"5\"\n" +
        "            force-ellipsis=\"true\"\n" +
        "            class=\"pagination-sm pagination-theme\"\n" +
        "            force-ellipses=\"true\"\n" +
        "            items-per-page=\"getItemsPerPage()\"></uib-pagination>\n" +
        "        </div>\n" +
        "        <div ng-if=\"bulkActions.length\">\n" +
        "          <button ng-repeat=\"bulkAction in bulkActions\"\n" +
        "            ng-click=\"bulkAction.fn(items | filter:{$selected:true}:true)\"\n" +
        "            ng-disabled=\"!bulkAction.isApplicable(items | filter:{$selected:true}:true)\"\n" +
        "            class=\"btn btn-theme\"\n" +
        "            style=\"margin-right:10px;\"\n" +
        "          >\n" +
        "            <i ng-if=\"bulkAction.icon\" class=\"{{bulkAction.icon}}\">&nbsp;</i>\n" +
        "            {{ bulkAction.name | translate }}\n" +
        "          </button>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    <div class=\"box box-default\" ng-if=\"definition.offlineListOptions.items.length\">\n" +
        "      <div class=\"box-header with-border\">\n" +
        "        <h3 class=\"box-title\">{{ 'OFFLINE_SAVED_RECORDS' | translate }}</h3>\n" +
        "      </div>\n" +
        "      <div class=\"box-body\">\n" +
        "        <irf-table-view\n" +
        "          table-options=\"definition.offlineListOptions\"\n" +
        "          table-data=\"definition.offlineListOptions.items\"\n" +
        "        ></irf-table-view>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div ng-if=\"modalPopup\">\n" +
        "    <h4 ng-if=\"definition.searchForm.length\" class=\"box-title box-title-theme\" style=\"text-align:center; margin: 20px 5px 10px\">\n" +
        "        <span class=\"text\" style=\"padding: 0 5px;\">{{ 'RESULTS' | translate }} <small>{{ getTotalItems() ? 'Showing ' + items.length + ' of ' + getTotalItems() + ' records':'' }}</small></span>\n" +
        "    </h4>\n" +
        "    <div ng-switch=\"model.view\" class=\"box-body\">\n" +
        "      <div ng-switch-when=\"results-loading\">\n" +
        "          {{ 'LOADING' | translate }}...\n" +
        "      </div>\n" +
        "      <div ng-switch-when=\"results-failed\">\n" +
        "          {{ 'SEARCH_FAILED' | translate }}...\n" +
        "      </div>\n" +
        "      <div ng-switch-when=\"results-loaded\" ng-show=\"!isLoading\">\n" +
        "        <irf-list-view\n" +
        "          list-style=\"listStyle\"\n" +
        "          list-info=\"listViewOptions\"\n" +
        "          irf-list-items=\"listItems\"\n" +
        "          irf-list-style-config=\"listStyleConfig\"\n" +
        "          irf-list-actual-items=\"items\"\n" +
        "          callback=\"definition.listOptions.itemCallback(item, index)\"></irf-list-view>\n" +
        "        <uib-pagination\n" +
        "          ng-show=\"getTotalItems() > items.length && (listViewOptions.listStyle !== 'table' || listViewOptions.config.serverPaginate !== false)\"\n" +
        "          ng-change=\"loadResults()\"\n" +
        "          ng-model=\"pageInfo.currentPage\"\n" +
        "          boundary-links=\"true\"\n" +
        "          total-items=\"getTotalItems();\"\n" +
        "          rotate=\"true\"\n" +
        "          max-size=\"5\"\n" +
        "          force-ellipsis=\"true\"\n" +
        "          class=\"pagination-sm pagination-theme\"\n" +
        "          force-ellipses=\"true\"\n" +
        "          items-per-page=\"getItemsPerPage()\"></uib-pagination>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div class=\"spinner-wrapper spinner-section-far-wrapper\" ng-show=\"showSearchSectionFarLoader\">\n" +
        "      <div class=\"spinner-section-far\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/searchListWrapper/search-list-wrapper.html","<div class=\"col-md-6\">\n" +
        "  <div class=\"box box-theme\">\n" +
        "    <div class=\"box-header with-border\">\n" +
        "        <h3 class=\"box-title\">{{definition.title | translate}}</h3>\n" +
        "        <div class=\"box-tools pull-right\">\n" +
        "            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\">\n" +
        "                <i class=\"fa fa-chevron-down\"></i></button>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"box-body form-horizontal\">\n" +
        "        <irf-search-box irf-search-definition=\"definition.searchDefinition\" irf-search-url=\"searchUrl\"></irf-search-box>\n" +
        "        <irf-list-view-rest-wrapper irf-lvr-wrapper-def=\"definition.restListDefinition\" irf-lvr-query-url=\"searchUrl\"></irf-list-view-rest-wrapper>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    
    $templateCache.put("irf/template/schemaforms/schemaforms.html","<div>\n" +
        "	<form\n" +
        "		name=\"{{formName}}\"\n" +
        "		ng-submit=\"submit($event)\"\n" +
        "		sf-schema=\"schema\"\n" +
        "		sf-form=\"form\"\n" +
        "		sf-model=\"model\"\n" +
        "        sf-options=\"formOptions\"\n" +
        "	></form>\n" +
        "	<div ng-if=\"showLoading\" class=\"cantina-loader-wrapper\"><div class=\"cantina-loader\"></div></div>\n" +
        "	<div ng-if=\"maskSchemaForm\" class=\"spinner-section-far-wrapper\"><div class=\"spinner-section-far\"></div></div>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/searchBox/search-box.html","<div>\n" +
        "	<form sf-schema=\"def.searchSchema\" sf-form=\"def.searchForm\" sf-model=\"searchOptions\" ng-submit=\"startSearch()\"></form>\n" +
        "</div>\n" +
        "")
    
    $templateCache.put("irf/template/table/SimpleTable.html","<div class=\"table-responsive\">\n" +
        "	<table class=\"table table-condensed\">\n" +
        "	    <tbody>\n" +
        "	        <tr>\n" +
        "	            <th ng-repeat=\"column in definition.columns\" style=\"{{column.style}}\" ng-bind-html=\"column.title\"></th>\n" +
        "	        </tr>\n" +
        "	        <tr ng-repeat=\"item in definition.data\">\n" +
        "	            <td ng-repeat-start=\"i in item\" ng-if=\"!isObject(i)\" ng-bind-html=\"i\"></td>\n" +
        "	            <td ng-repeat-end ng-if=\"isObject(i)\" sg-attrs=\"i\" ng-bind-html=\"i.value\"></td>\n" +
        "	        </tr>\n" +
        "	    </tbody>\n" +
        "	</table>\n" +
        "</div>")
    
    $templateCache.put("irf/template/tableView/table-view.html","<div class=\"irf-table-view table-responsive\" style=\"overflow: visible;\">\n" +
        "  <table id=\"example\" class=\"root-table dt-responsive table table-condensed table-responsive table-hover\" width=\"100\" no-wrap role=\"grid\"\" ></table>\n" +
        "</div>")
    
    $templateCache.put("irf/template/transposeView/transpose-view.html","<div class=\"transpose-view\">\n" +
        "	<table>\n" +
        "		<tr ng-repeat=\"col in tableOptions.columns\" ng-init=\"colIndex = $index\">\n" +
        "			<th ng-bind=\"col.title|translate\"></th>\n" +
        "			<td ng-repeat=\"row in tableData\" ng-class=\"col.className\" ng-bind-html=\"render(row, col, $index, colIndex)\"></td>\n" +
        "		</tr>\n" +
        "	</table>\n" +
        "</div>\n" +
        "<!-- <div class=\"transpose-view\">\n" +
        "	<table>\n" +
        "		<thead><tr><th ng-repeat=\"col in tableOptions.columns\" ng-bind=\"col.title|translate\"></th></tr></thead>\n" +
        "		<tbody>\n" +
        "			<tr ng-repeat=\"row in tableData\" ng-init=\"i=$index\">\n" +
        "				<td ng-repeat=\"col in tableOptions.columns\" ng-bind-html=\"render(row, col, i)\"></td>\n" +
        "			</tr>\n" +
        "		</tbody>\n" +
        "	</table>\n" +
        "</div>\n" +
        " -->")
    
    $templateCache.put("irf/template/uiselect/uiselect.html"," <ui-select\n" +
        "      ng-if=\"form.selection!=='multiple'\"\n" +
        "      theme=\"selectize\"\n" +
        "      ng-model=\"ctrl.modelValue\"\n" +
        "      ng-disabled=\"form.readonly\"\n" +
        "      ng-change=\"onChange($event)\"\n" +
        "      name=\"{{id}}\"\n" +
        "      id=\"{{id}}\"\n" +
        "      class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "    >\n" +
        "      <ui-select-match>{{$select.selected.name}}</ui-select-match>\n" +
        "      <ui-select-choices repeat=\"item in itemArray | filter: $select.search\">\n" +
        "        <span ng-bind=\"item.name\"></span>\n" +
        "      </ui-select-choices>\n" +
        "    </ui-select>\n" +
        "    \n" +
        "    <ui-select\n" +
        "      ng-if=\"form.selection==='multiple'\"\n" +
        "      multiple\n" +
        "      close-on-select=\"false\"\n" +
        "      theme=\"select2\"\n" +
        "      ng-model=\"modelValue\"\n" +
        "      ng-disabled=\"form.readonly\"\n" +
        "      ng-change=\"evalExpr('callOnChange(event, form, modelValue)', {form:form, modelValue:modelValue, event:$event})\"\n" +
        "      name=\"{{id}}\"\n" +
        "      id=\"{{id}}\"\n" +
        "      class=\"form-control {{form.fieldHtmlClass}}\"\n" +
        "    >\n" +
        "      <ui-select-match>{{$select.selected.name}}</ui-select-match>\n" +
        "      <ui-select-choices repeat=\"item in itemArray | filter: $select.search\">\n" +
        "        <span ng-bind=\"item.name\"></span>\n" +
        "      </ui-select-choices>\n" +
        "    </ui-select>")
    
    $templateCache.put("irf/template/validateBiometric/validate-biometric.html","<div ng-class=\"{'read-only':form.readonly}\" style=\"position:relative;height:inherit;\">\n" +
        "  <div class=\"row\" style=\"padding-bottom:7px;\">\n" +
        "    <div class=\"col-xs-12\">\n" +
        "      <select\n" +
        "        ng-change=\"buttonTitle=buttonText\"\n" +
        "        ng-model=\"validation\"\n" +
        "        ng-options=\"option as option.name group by option.type for option in options\"\n" +
        "        class=\"form-control\"\n" +
        "        style=\"width:100%\">\n" +
        "      </select>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div class=\"row\" style=\"height:21px\">\n" +
        "    <div class=\"col-xs-12\">\n" +
        "      <button ng-click=\"validateFinger($event)\" class=\"btn btn-theme btn-xs btn-block\" ng-disabled=\"disabled\"><i class=\"fa fa-hand-pointer-o\">&nbsp;</i>{{ buttonTitle | translate}}</button>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>")
    }]);
    })();