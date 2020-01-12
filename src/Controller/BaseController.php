<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
    /**
     * @Route("/", name="base")
     */
    public function index()
    {
        return $this->render('base/index.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

    /**
     * @Route("/a", name="base_a")
     */
    public function loadViewA()
    {
        return $this->render('base/view-a.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

    /**
     * @Route("/b", name="base_b")
     */
    public function loadViewB()
    {
        return $this->render('base/view-b.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

    /**
     * @Route("/c", name="base_c")
     */
    public function loadViewC()
    {
        return $this->render('base/view-c.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

        /**
     * @Route("/test", name="test")
     */
    public function test()
    {
        return $this->render('base/view-c.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }


}
