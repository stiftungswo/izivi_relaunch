<?php

namespace IZiviFrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/{route}", name="angular_index_all_unmatched_routes", requirements={"route" = ".*"})
     */
    public function indexAction()
    {
        return $this->render('IZiviFrontendBundle:Default:index.html.twig');
    }
}
