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

/* themes/systemctl_theme/templates/layout/page.html.twig */
class __TwigTemplate_582bdde68c3727b292fcb3104ac9f2896253e967893d58a2bce8f37af813a187 extends \Twig\Template
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
        $tags = array("if" => 7, "set" => 55);
        $filters = array("escape" => 8);
        $functions = array("drupal_block" => 30, "url" => 55, "file_url" => 59);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape'],
                ['drupal_block', 'url', 'file_url']
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
        // line 1
        echo "  <!-- Topbar -->
    <section id=\"topbar\" class=\"main-header\">
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-xs-6 col-sm-6 col-md-7 col-lg-7\">
                      <ul class=\"contact-info\">
                            ";
        // line 7
        if (($context["company_phone_no"] ?? null)) {
            // line 8
            echo "                                <li><a href=\"tel:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_phone_no"] ?? null), 8, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_phone_no"] ?? null), 8, $this->source), "html", null, true);
            echo "</a></li>
                            ";
        }
        // line 9
        echo " 
                            ";
        // line 10
        if (($context["company_email"] ?? null)) {
            // line 11
            echo "                                  <li><a href=\"mailto:";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_email"] ?? null), 11, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_email"] ?? null), 11, $this->source), "html", null, true);
            echo "</a></li>
                            ";
        }
        // line 13
        echo "                      </ul>
                </div>
                <div class=\"col-xs-6 col-sm-6 col-md-5 col-lg-5\">
                      <ul>
                          ";
        // line 17
        if (($context["facebook"] ?? null)) {
            // line 18
            echo "                              <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook"] ?? null), 18, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>
                          ";
        }
        // line 20
        echo "                          ";
        if (($context["twitter"] ?? null)) {
            // line 21
            echo "                              <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter"] ?? null), 21, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>
                            ";
        }
        // line 23
        echo "                            ";
        if (($context["linkedin"] ?? null)) {
            // line 24
            echo "                              <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["linkedin"] ?? null), 24, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>
                            ";
        }
        // line 26
        echo "                            ";
        if (($context["youtube"] ?? null)) {
            // line 27
            echo "                                 <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["youtube"] ?? null), 27, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a></li>
                            ";
        }
        // line 29
        echo "                          
                          ";
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalBlock("language_block:language_interface", array(), false), "html", null, true);
        echo "
                      </ul>
                          

                </div>
            </div>
        </div> <!-- end container -->
    </section> 
  <!-- end topbar -->

 <!-- Header -->
    <header>
      <nav id=\"menu\" class=\"navbar navbar-expand-lg\">
        <div class=\"container\">
     
           <div>";
        // line 45
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "logo", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
        echo " </div>
            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSCTLCorp\" aria-controls=\"navbarSCTLCorp\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
            <span class=\"fa fa-bars\"></span>
            </button>
            ";
        // line 49
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
        echo "
             
         
        </nav>
    </header>
  <!-- Header End --> 
";
        // line 55
        $context["url"] = $this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<current>");
        // line 56
        if ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "type", [], "any", false, false, true, 56), "entity", [], "any", false, false, true, 56), "label", [], "any", false, false, true, 56) == "Servicios")) {
            echo "     
  <!--Start Slider Area-->

<section class=\"banner\" style=\"background-image:url(";
            // line 59
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "field_imagen_slide", [], "any", false, false, true, 59), "entity", [], "any", false, false, true, 59), "fileuri", [], "any", false, false, true, 59), 59, $this->source)]), "html", null, true);
            echo ")\">
<div class=\"container\">
<div class=\"row\">
<div class=\"col-md-8 banner-content\">
<h1 class=\"animated fadeInUpBig\">";
            // line 63
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = ($context["page"] ?? null)) && is_array($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) || $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 instanceof ArrayAccess ? ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4["#title"] ?? null) : null), 63, $this->source), "html", null, true);
            echo "</h1>

<p class=\"animated fadeInDownBig\">";
            // line 65
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "field_descripcion_slide", [], "any", false, false, true, 65), 0, [], "any", false, false, true, 65), "value", [], "any", false, false, true, 65), 65, $this->source), "html", null, true);
            echo "</p>


</div>
</div>
</div>
</section>

  
  <!--End Slider Area-->
";
        }
        // line 76
        echo "

";
        // line 78
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
        echo "

    <!-- footer start -->
    <footer>
        <div class=\"container\">
            <div class=\"row footer-top\">
                <div class=\"col-xl-4 col-lg-3 col-md-6 wow fadeInLeft\" data-wow-delay=\"0.3s\">
                      ";
        // line 85
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_col_1", [], "any", false, false, true, 85), 85, $this->source), "html", null, true);
        echo "
                </div>
                 <div class=\"col-xl-2 col-lg-2 col-md-6 wow fadeInDown\" data-wow-delay=\"0.9s\">
                    <div class=\"pd\">
                      ";
        // line 89
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_col_2", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
        echo "
                    </div>
                </div>  
                <div class=\"col-xl-3 col-lg-4 col-md-6 contact wow fadeInRight\" data-wow-delay=\"0.12s\">
                    <h2>";
        // line 93
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["contact_header"] ?? null), 93, $this->source), "html", null, true);
        echo "</h2>
                    <p><i class=\"fa fa-map-marker\"></i><span>";
        // line 94
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_address"] ?? null), 94, $this->source), "html", null, true);
        echo "</span></p>
                    <a href=\"mailto:";
        // line 95
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_email"] ?? null), 95, $this->source), "html", null, true);
        echo "\"><i class=\"fa fa-envelope\"></i>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_email"] ?? null), 95, $this->source), "html", null, true);
        echo "</a>
                    <a href=\"tel:";
        // line 96
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_phone_no"] ?? null), 96, $this->source), "html", null, true);
        echo "\"><i class=\"fa fa-phone\"></i>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["company_phone_no"] ?? null), 96, $this->source), "html", null, true);
        echo "</a>
                </div>
                <div class=\"col-xl-3 col-lg-3 col-md-6 pd wow fadeInUp\" data-wow-delay=\"0.6s\">
                    <h2>";
        // line 99
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["social_title"] ?? null), 99, $this->source), "html", null, true);
        echo "</h2>
                    <div class=\"pd\">
                      <ul class=\"social\">
                         ";
        // line 102
        if (($context["facebook"] ?? null)) {
            // line 103
            echo "                              <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook"] ?? null), 103, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-facebook\"></i></a></li>
                          ";
        }
        // line 105
        echo "                          ";
        if (($context["twitter"] ?? null)) {
            // line 106
            echo "                              <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter"] ?? null), 106, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-twitter\"></i></a></li>
                          ";
        }
        // line 108
        echo "                          ";
        if (($context["instagram"] ?? null)) {
            // line 109
            echo "                            <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["instagram"] ?? null), 109, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-instagram\"></i></a></li>
                          ";
        }
        // line 111
        echo "                          ";
        if (($context["youtube"] ?? null)) {
            // line 112
            echo "                            <li><a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["youtube"] ?? null), 112, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-youtube\"></i></a></li>
                          ";
        }
        // line 114
        echo "                      </ul>  
                    </div>  
                </div> 
            </div>    
        </div>
        <div class=\"copyright\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md-6 mx-auto text-center copyright wow fadeInUp\" data-wow-delay=\"0.5s\"> 
              <p> &copy;2020. <a href=\"#\"> systemctl service</a>.&nbsp;All Rights Reserved.<br></p>
              <p class=\"our-info\"> Theme By<a href=\"https://jeronimotavira.github.io/\" target=\"_blank\"> Jerónimo</a>, de <a href=\"#\" target=\"_blank\"> SYSTEMCTL</a></p>   
          </div>  
            </div>
          </div>
      </div>
    </footer>
    <!-- footer end -->

  <!-- back to top button -->
  <button class=\"scroll-top scroll-to-target\" data-target=\"html\">
      <span class=\"fa fa-long-arrow-up\"></span>
  </button>";
    }

    public function getTemplateName()
    {
        return "themes/systemctl_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  296 => 114,  290 => 112,  287 => 111,  281 => 109,  278 => 108,  272 => 106,  269 => 105,  263 => 103,  261 => 102,  255 => 99,  247 => 96,  241 => 95,  237 => 94,  233 => 93,  226 => 89,  219 => 85,  209 => 78,  205 => 76,  191 => 65,  186 => 63,  179 => 59,  173 => 56,  171 => 55,  162 => 49,  155 => 45,  137 => 30,  134 => 29,  128 => 27,  125 => 26,  119 => 24,  116 => 23,  110 => 21,  107 => 20,  101 => 18,  99 => 17,  93 => 13,  85 => 11,  83 => 10,  80 => 9,  72 => 8,  70 => 7,  62 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/systemctl_theme/templates/layout/page.html.twig", "C:\\wamp64\\www\\systemctl\\themes\\systemctl_theme\\templates\\layout\\page.html.twig");
    }
}
