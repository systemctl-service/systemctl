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

/* themes/systemctl_theme/templates/navigation/menu--main.html.twig */
class __TwigTemplate_e7a435245dd4f021468dd66ce6b0609cbde6a6e2fb92e223515fc73f3f674a2a extends \Twig\Template
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
        $tags = array("import" => 23, "macro" => 31, "if" => 33, "for" => 38, "set" => 40);
        $filters = array("escape" => 48);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
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
        // line 23
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 24
        echo "
";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 29, $context, $this->getSourceContext()));
        echo "

";
        // line 82
        echo "    </ul>
</div>
";
    }

    // line 31
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 32
            echo "  ";
            $macros["menus"] = $this;
            // line 33
            echo "  ";
            if ((($context["menu_level"] ?? null) == 0)) {
                // line 34
                echo "     <div class=\"collapse navbar-collapse \" id=\"navbarSCTLCorp\">
   <ul class=\"navbar-nav ml-auto\">
  ";
            }
            // line 37
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 38
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 39
                    echo "      ";
                    if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 39)) {
                        // line 40
                        echo "          ";
                        $context["active_url"] = false;
                        // line 41
                        echo "          ";
                        $context["active_class"] = "";
                        // line 42
                        echo "          ";
                        $context['_parent'] = $context;
                        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 42));
                        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
                            // line 43
                            echo "            ";
                            if (((($context["active_url"] ?? null) == false) && twig_get_attribute($this->env, $this->source, $context["child"], "in_active_trail", [], "any", false, false, true, 43))) {
                                // line 44
                                echo "              ";
                                $context["active_url"] = true;
                                echo " 
              ";
                                // line 45
                                $context["active_class"] = "active";
                                echo "   
            ";
                            }
                            // line 47
                            echo "          ";
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        // line 48
                        echo "          <li class='nav-item dropdown ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["active_class"] ?? null), 48, $this->source), "html", null, true);
                        echo "'>
            <a class=\"nav-link\" href=\"#\" id=\"navbarDropdownMenu-";
                        // line 49
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
                        echo "\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
              ";
                        // line 50
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 50), 50, $this->source), "html", null, true);
                        echo "  <i class=\"fa fa-chevron-down\"></i>
            </a>
            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenu-";
                        // line 52
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 52), 52, $this->source), "html", null, true);
                        echo "\">
              <ul>
              ";
                        // line 54
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 54), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 54, $context, $this->getSourceContext()));
                        echo "
              </ul>
            </div>
          </li>
      ";
                    } else {
                        // line 59
                        echo "            ";
                        // line 60
                        $context["classes"] = [0 => ((twig_get_attribute($this->env, $this->source,                         // line 61
$context["item"], "in_active_trail", [], "any", false, false, true, 61)) ? ("active") : (""))];
                        // line 64
                        echo "            ";
                        if ((($context["menu_level"] ?? null) == 0)) {
                            // line 65
                            echo "              <li ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 65), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 65), 65, $this->source), "html", null, true);
                            echo ">
                <a href=\"";
                            // line 66
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
                            echo "\">
                    ";
                            // line 67
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
                            echo "
                </a>
              </li>
            ";
                        } else {
                            // line 71
                            echo "              <li>
                <a class=\"dropdown-item\" href=\"";
                            // line 72
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
                            echo "\">
                  ";
                            // line 73
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
                            echo "
                </a>
              </li>
            ";
                        }
                        // line 77
                        echo "      ";
                    }
                    // line 78
                    echo "    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 79
                echo "  ";
            }
            // line 80
            echo "  
";

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "themes/systemctl_theme/templates/navigation/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  222 => 80,  219 => 79,  213 => 78,  210 => 77,  203 => 73,  199 => 72,  196 => 71,  189 => 67,  185 => 66,  180 => 65,  177 => 64,  175 => 61,  174 => 60,  172 => 59,  164 => 54,  159 => 52,  154 => 50,  150 => 49,  145 => 48,  139 => 47,  134 => 45,  129 => 44,  126 => 43,  121 => 42,  118 => 41,  115 => 40,  112 => 39,  107 => 38,  104 => 37,  99 => 34,  96 => 33,  93 => 32,  78 => 31,  72 => 82,  67 => 29,  64 => 24,  62 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/systemctl_theme/templates/navigation/menu--main.html.twig", "C:\\wamp64\\www\\systemctl\\themes\\systemctl_theme\\templates\\navigation\\menu--main.html.twig");
    }
}
