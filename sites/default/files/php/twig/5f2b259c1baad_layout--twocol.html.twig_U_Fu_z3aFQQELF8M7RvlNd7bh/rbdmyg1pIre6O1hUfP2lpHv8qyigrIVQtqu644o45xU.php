<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/themes/stable/templates/layout/layout--twocol.html.twig */
class __TwigTemplate_5e4a34b2a9cb4143c23a6482599edab1cd05a4cc1fde51aad2304aeefff26983 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = array("set" => 12, "if" => 17);
        $filters = array("escape" => 18);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 12
        $context["classes"] = [0 => "layout", 1 => "layout--twocol"];
        // line 17
        if (($context["content"] ?? null)) {
            // line 18
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 18), 18, $this->source), "html", null, true);
            echo ">
    ";
            // line 19
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "top", [], "any", false, false, true, 19)) {
                // line 20
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "top", [], "any", false, false, true, 20), "addClass", [0 => "layout__region", 1 => "layout__region--top"], "method", false, false, true, 20), 20, $this->source), "html", null, true);
                echo ">
        ";
                // line 21
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "top", [], "any", false, false, true, 21), 21, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 24
            echo "
    ";
            // line 25
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first", [], "any", false, false, true, 25)) {
                // line 26
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "first", [], "any", false, false, true, 26), "addClass", [0 => "layout__region", 1 => "layout__region--first"], "method", false, false, true, 26), 26, $this->source), "html", null, true);
                echo ">
        ";
                // line 27
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 30
            echo "
    ";
            // line 31
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "second", [], "any", false, false, true, 31)) {
                // line 32
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "second", [], "any", false, false, true, 32), "addClass", [0 => "layout__region", 1 => "layout__region--second"], "method", false, false, true, 32), 32, $this->source), "html", null, true);
                echo ">
        ";
                // line 33
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "second", [], "any", false, false, true, 33), 33, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 36
            echo "
    ";
            // line 37
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "bottom", [], "any", false, false, true, 37)) {
                // line 38
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "bottom", [], "any", false, false, true, 38), "addClass", [0 => "layout__region", 1 => "layout__region--bottom"], "method", false, false, true, 38), 38, $this->source), "html", null, true);
                echo ">
        ";
                // line 39
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "bottom", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 42
            echo "  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "core/themes/stable/templates/layout/layout--twocol.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 42,  126 => 39,  121 => 38,  119 => 37,  116 => 36,  110 => 33,  105 => 32,  103 => 31,  100 => 30,  94 => 27,  89 => 26,  87 => 25,  84 => 24,  78 => 21,  73 => 20,  71 => 19,  66 => 18,  64 => 17,  62 => 12,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/stable/templates/layout/layout--twocol.html.twig", "C:\\wamp64\\www\\systemctl\\core\\themes\\stable\\templates\\layout\\layout--twocol.html.twig");
    }
}
